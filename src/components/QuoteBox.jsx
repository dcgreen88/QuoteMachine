export default function QuoteBox({ quote, onClick, color }) {
  return (
    <div
      id="quote-box"
      className=" bg-white rounded-sm w-[450px] h-auto px-[50px] py-[40px]"
    >
      <div id="quote-text">
        <i class={`fa fa-quote-left text-2xl pr-[10px] text-${color}`}></i>
        <span id="text" className={`text-2xl text-${color}`}>
          {quote.quote}
        </span>
      </div>
      <div id="author" className={`text-${color} flex justify-end pt-[20px]`}>
        - {quote.author}
      </div>
      <div id="button-bar" className="flex justify-between mt-[30px] items-end">
        <a href="twitter.com/intent/tweet" target="_blank" id="tweet-quote" className="">
          <i class={`fab fa-twitter text-md text-white bg-${color} flex justify-center items-center h-[38px] w-[40px] rounded-sm`}></i>
        </a>
        <button
          id="new-quote"
          onClick={onClick}
          className={`bg-${color} pt-[8px] px-[18px] py-[6px] text-white rounded-sm`}
        >
          New quote
        </button>
      </div>
    </div>
  );
}
