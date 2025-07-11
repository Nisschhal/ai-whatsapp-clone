import LeftPanel from "@/components/left-panel"
import RightPanel from "@/components/right-panel"

export default function Home() {
  return (
    <main className="m-5">
      <div className="flex overflow-y-hidden h-[calc(100vh-50px)] max-w-[1700px] mx-auto bg-left-panel dark:bg-left-panel-bg-dark rounded-lg shadow-lg">
        {/* Green background decorator for light mode */}
        <div className="fixed top-0 left-0 w-full h-36 bg-green-primary dark:bg-transparent -z-5 " />
        <LeftPanel />
        <RightPanel />
      </div>
    </main>
  )
}
