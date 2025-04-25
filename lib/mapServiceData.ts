import { serviceItem } from "@/data/data";
import { Service } from "@prisma/client";

export function mapServiceData(data: any[]): serviceItem[] {
  return data.map((item) => ({
    ...item,
    id: Number(item.id),
    service_id: Number(item.service_id),
    created_at: item.created_at?.toISOString() ?? null,
    updated_at: item.updated_at?.toISOString() ?? null,
    serviceName: item.serviceName
      ? {
          id: Number(item.serviceName.id),
          service_name: item.serviceName.service_name,
          service_link: item.serviceName.service_link
        }
      : undefined,
  }));
}
