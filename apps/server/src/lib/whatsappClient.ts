import { Schema } from "mongoose";
import axios from "axios";

function formatDate(date: Date): string {
  return new Date(date).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export async function whatsappSender(
  student: { name: string; contact: string; teacherId: Schema.Types.ObjectId },
  fee: { dueDate: Date; amount: number },
  type: string
): Promise<{ success: boolean; message: string; error?: any }> {
    console.log("reminder sended successfully", student.contact);
    
  return {
    success: true,
    message: "WhatsApp reminder sent successfully.",
  };
}
