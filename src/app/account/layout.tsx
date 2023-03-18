import { AmplifyClient } from "@/components/amplify";
import Sidebar from "@/components/sidebar";
// import { withSSRContext, Auth } from "aws-amplify";
// import { headers } from "next/headers";

export default function Layout({ children }: { children: React.ReactNode }) {

  // const headersList = headers();
  // const { Auth: ServerAuth } = withSSRContext({ modules: [Auth], req: {headers: headersList.get("cookie")} } )
  // console.log(ServerAuth)

  return (
    <div className="min-h-full">
      <Sidebar />

      <AmplifyClient />
      {children}
    </div>
  );
}
