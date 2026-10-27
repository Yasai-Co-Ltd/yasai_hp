import {
  BookOpen,
  Clock,
  Flag,
  Goal,
  Home,
  MessageCircle,
  Send,
  ShieldCheck,
  Sparkles,
  Video,
  type LucideIcon,
} from "lucide-react";
import type { Service } from "@/data/services";

const iconMap: Record<
  Service["concepts"][number]["icon"] | Service["features"][number]["icon"],
  LucideIcon
> = {
  Flag,
  Sparkles,
  BookOpen,
  MessageCircle,
  ShieldCheck,
  Home,
  Video,
  Clock,
  Send,
  Goal,
};

export function getServiceIcon(
  name: Service["concepts"][number]["icon"] | Service["features"][number]["icon"],
): LucideIcon {
  return iconMap[name] ?? Sparkles;
}
