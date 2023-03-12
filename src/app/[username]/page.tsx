import { Calendar } from "@/components/calendar";
import Cards from "@/components/cards";
import Footer from "@/components/footer";
import Header from "@/components/header";
// import CreateForm from "./account/create/form";

export default function Page() {
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
