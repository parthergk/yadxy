export interface Plan {
  _id: string;
  type: "free" | "pro";
  price: number;
  studentLimit: number | null;
  durationDays: number | null;
  title: string;
  description: string;
  features: string[];
  buttonText: string;
  highlight: boolean;
  isActive: boolean;
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
}

export const plans:Plan[] = [
    {
      _id: "69030f528b97844c865a7011",
      type: "free",
      price: 0,
      studentLimit: 20,
      durationDays: null,
      title: "Free",
      description: "Best for individual tutors just starting with small batches of students.",
      features: [
        "Manage up to 20 students",
        "Track monthly fee payments",
        "Send WhatsApp reminders",
      ],
      buttonText: "Get Started",
      highlight: false,
      isActive: true,
      createdAt: "2025-10-30T07:10:10.374Z",
      updatedAt: "2025-10-30T07:10:10.374Z",
    },
    {
      _id: "69030f528b97844c865a7014",
      type: "pro",
      price: 199,
      studentLimit: null,
      durationDays: 30,
      title: "Pro",
      description: "Perfect for coaching centers managing multiple teachers and larger student groups.",
      features: [
        "Unlimited students",
        "Auto payment tracking",
        "WhatsApp & SMS reminders",
        "Dashboard & reports",
        "Priority support",
      ],
      buttonText: "Upgrade to Pro",
      highlight: true,
      isActive: true,
      createdAt: "2025-10-30T07:10:10.560Z",
      updatedAt: "2025-10-30T07:10:10.560Z",
    },
  ];