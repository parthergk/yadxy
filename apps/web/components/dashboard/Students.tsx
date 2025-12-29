import { BadgeCheck, Pen, Trash2 } from "lucide-react";
import React, { useEffect, useState } from "react";
import StudentsHeader from "./StudentsHeader";
import StudentForm from "../student/StudentForm";
import MarkAsPaid from "../student/MarkAsPaid";
import DeleteForm from "./DeleteForm";
import UpdateForm from "./UpdateForm";

interface FormInputs {
  id: string;
  name: string;
  contact: string;
  class: string;
  monthlyFee: string;
  dueDate: string;
}

interface SelectedStudent {
  id: string;
  name: string;
}

interface Student {
  _id: string;
  feeId: string;
  name: string;
  contact: number;
  sub: string;
  monthlyFee: string;
  feeDay: string;
  joinDate: string;
  status: string;
}

const Students = () => {
  const [showForm, setShowForm] = useState(false);
  const [openMark, setOpenMark] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const [isUpdate, setIsUpdate] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormInputs | null>(null);
  const [feeId, setFeeId] = useState("");
  const [student, setStudent] = useState<SelectedStudent | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [searchTerm, setSearchTerm] = useState("");

  const handleAddStudent = () => {
    setShowForm((prev) => !prev);
  };

  const [students, setStudents] = useState<Student[]>([]);

  const filteredStudents = students.filter((s) =>
    s.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  async function fetchStudents() {
    try {
      setError(null);
      setIsLoading(true);
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/student`,
        {
          method: "GET",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("No students found. Please try again later.");
      }
      const result = await response.json();
      setIsLoading(false);
      setStudents(result.students);
    } catch (err) {
      setIsLoading(false);
      console.error("Error fetching students:", err);
      setError("Failed to load students. Please try again later.");
    }
  }

  useEffect(() => {
    fetchStudents();
  }, []);

  if (error) {
    return (
      <div className="mt-2 p-2 rounded-md text-sm font-medium bg-gradient-to-bl from-[#E8DFFF]/30 to-[#DDEBFF]/30 shadow-xl shadow-black/10 border border-white/50 text-[#E53935]">
        ⚠️ {error}
      </div>
    );
  }
  return (
    <>
      <div className=" flex justify-between items-center">
        <button
          onClick={handleAddStudent}
          className=" bg-primary hover:bg-[#ea580c] hover:scale-105 transition text-white py-1 px-2.5 sm:py-1.5 sm:px-3 rounded-md shadow-md cursor-pointer"
        >
          Add Student
        </button>
        <input
          type="text"
          placeholder="Search students..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="py-1 px-2.5 sm:py-1.5 sm:px-3 border border-slate-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
        />
      </div>

      <div className=" w-full mt-8 overflow-x-auto min-h-80 shadow-lg  border border-white/50 rounded-lg">
        <StudentsHeader />

        <div className=" w-full h-full p-4 min-w-[810px] md:min-w-[600px] sm:max-h-80 overflow-y-auto">
          <ul className=" w-full space-y-3">
            {isLoading ? (
              <div className="animate-pulse space-y-3">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="h-5 bg-slate-200 rounded-md"></div>
                ))}
              </div>
            ) : students.length > 0 ? (
              filteredStudents.map((student) => (
                <li
                  key={student._id}
                  className=" w-full grid grid-cols-7 gap-1 items-center border-b border-slate-100 pb-2 text-sm sm:text-base"
                >
                  <span className="truncate">{student.name}</span>
                  <span>{student.contact}</span>
                  <span className="truncate">{student.sub}</span>
                  <span>₹{student.monthlyFee}</span>
                  <span>{new Date(student.joinDate).toLocaleDateString()}</span>
                  <span className=" text-center">{student.feeDay}</span>
                  <div className="flex gap-5">
                    <button
                      onClick={() => {
                        setFormData({
                          id: student._id,
                          name: student.name,
                          contact: student.contact.toString(),
                          class: student.sub,
                          monthlyFee: student.monthlyFee,
                          dueDate: student.feeDay,
                        });
                        setIsUpdate(true);
                      }}
                      className=" relative text-sub hover:underline text-sm cursor-pointer group"
                    >
                      <Pen className=" h-4 w-4" />
                      <span className="px-2 bottom-3 left-1 absolute rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        Edit
                      </span>
                    </button>
                    <button
                      onClick={() => {
                        setIsDelete(true);
                        setStudent({ id: student._id, name: student.name });
                      }}
                      className="relative text-red-600 hover:underline text-sm cursor-pointer group"
                    >
                      <Trash2 className=" h-4 w-4" />
                      <span className="px-2 bottom-3 left-1 absolute rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        Delete
                      </span>
                    </button>
                  </div>
                </li>
              ))
            ) : (
              <div className="animate-pulse space-y-3">
                No stundet found Please add students
              </div>
            )}
          </ul>
        </div>
      </div>
      <StudentForm
        isOpen={showForm}
        setIsOpen={setShowForm}
        fetchData={fetchStudents}
      />
      {isUpdate && (
        <UpdateForm
          setIsUpdate={setIsUpdate}
          formData={formData}
          fetchData={fetchStudents}
        />
      )}
      {openMark && (
        <MarkAsPaid
          setOpenMark={setOpenMark}
          feeId={feeId}
          fetchData={fetchStudents}
        />
      )}
      {isDelete && (
        <DeleteForm
          student={student}
          setIsDelete={setIsDelete}
          fetchData={fetchStudents}
        />
      )}
    </>
  );
};

export default Students;
