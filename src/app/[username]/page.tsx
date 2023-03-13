import { Calendar } from "@/components/calendar";
import Cards from "@/components/cards";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { GET_PUBLIC_PROFILE } from "@/queries/PROFILE";
import { useQuery } from "@apollo/client";
// import CreateForm from "./account/create/form";

export default function Page({ params }) {
  const { data, loading } = useQuery(GET_PUBLIC_PROFILE, {
    variables: { username: params.username },
  });

  return (
    <div>
      <Header />
      <div className="lg:grid lg:grid-cols-12 lg:gap-x-16 max-w-6xl lg:mx-auto min-h-screen">
        <Cards />
        <Calendar />
      </div>
      <Footer />
    </div>
  );
}
