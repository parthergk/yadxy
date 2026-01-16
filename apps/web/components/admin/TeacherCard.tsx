import type React from "react"
import { format } from "date-fns"
import { Calendar, Mail, Phone } from "lucide-react"

interface Teacher {
  _id: string
  name: string
  email: string
  phone: string
  plan: {
    subscription: {
      startedAt: Date
      endsAt: Date
      status: string
    }
    trial: {
      startedAt: Date
      endsAt: Date
      status: string
    }
  }
  createdAt: string
}

interface Props {
  teacher: Teacher
}

function getActivePlan(teacher: Teacher) {
  if (teacher.plan.subscription.status === "ACTIVE" && teacher.plan.subscription.endsAt) {
    return {
      type: "subscription",
      status: "ACTIVE",
      endsAt: teacher.plan.subscription.endsAt,
    }
  }
  if (teacher.plan.trial.status === "active" && teacher.plan.trial.endsAt) {
    return {
      type: "trial",
      status: "active",
      endsAt: teacher.plan.trial.endsAt,
    }
  }
  return null
}

function getPlanDisplayInfo(teacher: Teacher) {
  const activePlan = getActivePlan(teacher)

  if (!activePlan) {
    return {
      label: "No active plan",
      daysRemaining: null,
      color: "bg-gray-50 text-gray-700 dark:bg-gray-950 dark:text-gray-400",
      dotColor: "bg-gray-600",
    }
  }

  const endDate = new Date(activePlan.endsAt)
  const now = new Date()
  const daysRemaining = Math.ceil((endDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24))

  if (daysRemaining <= 0) {
    return {
      label: "Expired",
      daysRemaining: null,
      color: "bg-red-50 text-red-700 dark:bg-red-950 dark:text-red-400",
      dotColor: "bg-red-600",
    }
  }

  const planTypeLabel = activePlan.type === "subscription" ? "Subscription" : "Trial"
  return {
    label: `${planTypeLabel} • ${daysRemaining}d left`,
    daysRemaining,
    color: "bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-400",
    dotColor: "bg-green-600",
  }
}

const TeacherCard: React.FC<Props> = ({ teacher }) => {
  const planInfo = getPlanDisplayInfo(teacher)
  const joinedDate = format(new Date(teacher.createdAt), "MMM d, yyyy")

  return (
    <div className="group relative flex items-center gap-4 rounded-lg border border-border bg-card px-4 py-3 transition-all hover:shadow-md">
      {/* Teacher Info - Main Content */}
      <div className="flex-1 min-w-0">
        <h4 className="text-sm leading-5 text-foreground truncate">{teacher.name}</h4>

        <div className="flex items-center gap-3 mt-2 text-xs text-muted-foreground flex-wrap">
          <div className="flex items-center gap-1 flex-shrink-0">
            <Calendar className="h-3 w-3" />
            <span>Joined {joinedDate}</span>
          </div>
          <div className="h-1 w-1 rounded-full bg-muted-foreground flex-shrink-0" />
          <div className="flex items-center gap-1 truncate">
            <Mail className="h-3 w-3 flex-shrink-0" />
            <span className="truncate">{teacher.email}</span>
          </div>
          <div className="h-1 w-1 rounded-full bg-muted-foreground flex-shrink-0" />
          <div className="flex items-center gap-1 flex-shrink-0">
            <Phone className="h-3 w-3" />
            <span>{teacher.phone}</span>
          </div>
        </div>
      </div>

      {/* Plan Status Badge */}
      <div className="flex-shrink-0">
        <div
          className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs whitespace-nowrap ${planInfo.color}`}
        >
          <span className={`h-2 w-2 rounded-full ${planInfo.dotColor}`} />
          {planInfo.label}
        </div>
      </div>
    </div>
  )
}

export default TeacherCard
