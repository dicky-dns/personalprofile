import BookmarkTitle from "./BookmarkTitle";

export default function Bookmark() {
  
  return (
    <section
      id="bookmark"
      className="relative top-[90px] md:top[120px] pb-section flex  w-full justify-center overflow-hidden"
    >
      <div className="mx-auto flex w-[90%] flex-col items-start justify-center lg:max-w-[1212.8px]">
        <div className="mb-10 flex w-full items-center justify-between gap-x-2 md:mb-16">
          <BookmarkTitle/>
        </div>
      </div>
    </section>
  )
}
