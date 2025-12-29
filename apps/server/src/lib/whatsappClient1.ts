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
  try {
    await axios.post(
      `https://graph.facebook.com/v22.0/${process.env.PHONE_NUMBER_ID}/messages`,
      {
        messaging_product: "whatsapp",
        to: `91${student.contact}`,
        type: "template",
        template: {
          name: "hello_world",
          language: { code: "en_US" },
        },
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.WHATSAPP_TOKEN}`,
          "Content-Type": "application/json",
        },
      }
    );

    return {
      success: true,
      message: "WhatsApp reminder sent successfully.",
    };
  } catch (error: any) {
    console.error("Error sending WhatsApp reminder:", error.message || error);

    return {
      success: false,
      message: "Error sending WhatsApp reminder.",
      error: error.message || error,
    };
  }
}
