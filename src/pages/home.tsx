// import { getData } from "@/api/https"
// import { QueryEndpoints } from "@/utils/emdpoints"
// import { QueryKeys } from "@/utils/keys"
// import { useQuery } from "@tanstack/react-query"

const Home = () => {

    // const { data, isLoading, isError, error } =useQuery({
    //     queryKey: [QueryKeys.todos],
    //     queryFn: () =>  getData(`${import.meta.env.VITE_BASE_URL}${QueryEndpoints.todos}`)
    // })

    // if(isLoading) {
    //     return <h2>Loading.......</h2>
    // }

    // if(isError) {
    //     return <h2>{error.message}</h2>
    // }

  return (
    <div>Home</div>
  )
}

export default Home