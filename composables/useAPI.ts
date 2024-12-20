import type { UseFetchOptions } from "#app"
import { API_BASE_URL } from "~/utils/constants"

export const useAPI = () => {

 function useFactoryAPI<T>(URL: string, options?: UseFetchOptions<T>) {
  return useFetch(URL, {
   ...options,
   $fetch: useNuxtApp().$api as typeof $fetch
   // TODO
   // lazy: true,
   // server: false
  })
 }


 // @FUNCTIONS

 return { useFactoryAPI }
}