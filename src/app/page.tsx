import Awards from "@/components/Awards";
import Feature from "@/components/Feature";
import Hero from "@/components/Hero";
import Divider from "@/components/Divider";
import People from "@/components/People";

export const dynamic = 'force-dynamic'

export default async function Home() {

  return (
    <>
      <Hero />
      <span>
        <Divider />
      </span>
      <Feature />
      <span>
        <Divider />
      </span>
      <Awards />
      <span>
        <Divider />
      </span>
      <People />
    </>
  );
}
