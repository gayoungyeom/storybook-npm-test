import { useQuery } from "@tanstack/react-query"
import { axiosInstance } from "./common"

interface ITestList {
  id: number
  name: string
  data?: {
    color?: string
    capacity?: string
  }
}

export const useGetTestList = () =>
  useQuery<ITestList[]>({
    queryKey: ["test"],
    queryFn: () => axiosInstance.get(`/objects`).then((res) => res.data),
  })
