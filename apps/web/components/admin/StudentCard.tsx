import type React from "react"
import { Phone, Calendar, IndianRupee } from "lucide-react"
import { format } from "date-fns"

interface Student {
  _id: string
  name: string
  contact: string
  monthlyFee: string
  class: string
  joinDate: Date
}

interface Props {
  student: Student
}

const StudentCard: React.FC<Props> = ({ student }) => {
  const joinedDate = format(new Date(student.joinDate), "MMM d, yyyy")

  return (
    <div className="group relative flex items-center gap-4 rounded-lg border border-border bg-card px-4 py-3 transition-all hover:shadow-md">
      {/* Student Info - Main Content */}
      <div className="flex-1 min-w-0">
        <h4 className="text-sm leading-5 text-foreground truncate">{student.name}</h4>

        <div className="flex items-center gap-3 mt-2 text-xs text-muted-foreground flex-wrap">
          <div className="flex items-center gap-1 flex-shrink-0">
            <span className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-0.5 text-xs text-slate-700 dark:bg-slate-900 dark:text-slate-300">
              {student.class}
            </span>
          </div>
          <div className="h-1 w-1 rounded-full bg-muted-foreground flex-shrink-0" />
          <div className="flex items-center gap-1 flex-shrink-0">
            <Calendar className="h-3 w-3" />
            <span>Joined {joinedDate}</span>
          </div>
          <div className="h-1 w-1 rounded-full bg-muted-foreground flex-shrink-0" />
          <div className="flex items-center gap-1 flex-shrink-0">
            <Phone className="h-3 w-3" />
            <span>{student.contact}</span>
          </div>
        </div>
      </div>

      {/* Fee Badge */}
      <div className="flex-shrink-0">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 px-3 py-1 text-xs text-amber-700 dark:bg-amber-950 dark:text-amber-200 whitespace-nowrap">
          <IndianRupee className="h-3 w-3" />
          <span>{student.monthlyFee}/mo</span>
        </div>
      </div>
    </div>
  )
}

export default StudentCard
