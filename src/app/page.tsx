import { drukWide, plus_jakarta_sans, messina_mono_sans } from "./fonts";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ModeToggle";
import ImageList from "@/components/imageList";
import Header from "./header";
import NextLink from "next/link";
import { createClient } from '@supabase/supabase-js'
export const dynamic = 'force-dynamic'

export default async function Home() {
  const demos = await getProjects();

  return (
    <div className="[ overflow-x-none min-h-screen ]">
      <Header />
      <main className="w-full h-screen py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container px-4 md:px-6">
          <div className={`${messina_mono_sans.className} grid gap-6 lg:grid-cols-2 xl:gap-10`}>
              ewdwedewdw
            </div>
          <div className="grid gap-6 items-center">
            <div className="flex flex-col justify-center space-y-4 text-center">
              <div
                className="w-full text-center space-y-7"
                style={{ fontSize: "5vw", whiteSpace: "nowrap" }}
              >
                <span className={`${drukWide.className} text-black dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r dark:from-white dark:to-gray-500 fill-primary ship-it`}>
                  ship it
                </span>
                <h2
                  className={`${plus_jakarta_sans.className} max-w-[600px] text-zinc-200 md:text-xl dark:text-zinc-100 mx-auto `}
                >
                  a space to forget about school and ship your next idea.
                </h2>
                <div className="mx-auto space-x-2">
                  <Button variant="outline">Join Discord</Button>
                  <Button>Bring this to your campus</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-full flex justify-center z-20">

          </div>
          {/* <ImageList demos={demos} /> */}
        </div>

      </main>
    </div>
  );
}


async function getProjects() {
  const supabase = createClient('https://wrlispjjwzomjvomdrbm.supabase.co', "")

  const res = await fetch(
    "https://api.airtable.com/v0/applTePF0yE2evQhL/Projects%20(for%20website)",
    {
      headers: {
        Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`,
      },
    }
  );
  const data = await res.json();
  console.log(data)
  const recs = data["records"].map(async (record: any) => {
    const id = record['id']
    const oneLiner = record.fields["One-liner"];
    const name = record.fields["Name"];
    const image = record.fields["Media"][0]["url"];
    const imageData = await fetch(image).then(res => res.blob())
    const base64data = URL.createObjectURL(imageData)
    
    let { data, error } = await supabase
  .storage
    .getBucket('airtableImagesBucket')
    if(data == null) {
      let { data, error } = await supabase
        .storage
        .createBucket('airtableImagesBucket', {
          public: false,
        })
        console.log(data)
        console.log(error)
    }
    console.log(data)
    // console.log(error)
    
    // if()
    return { id, oneLiner, name, image };
  });


  return recs;
}
