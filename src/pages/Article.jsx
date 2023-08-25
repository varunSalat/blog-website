import { Btn } from "../components";
import BorderColorIcon from "@mui/icons-material/BorderColor";

const Article = () => {
  const admin = true;
  return (
    <div className="grid md:grid-cols-12">
      <div className="col-span-2"></div>
      <section className="flex flex-col justify-center items-center gap-4 padding md:col-span-8">
        <div className="flex flex-col justify-center items-center">
          <img
            src="./profile.webp"
            alt="Profile Pic"
            className="h-20 rounded-full object-cover"
          />
          <h4 className="font-semibold text-base">Hardik Sadhu</h4>
          <time className="font-light text-sm text-gray-400">JULY 4, 2023</time>
        </div>
        {admin && <Btn title={"Edit"} icon={BorderColorIcon} />}
        <h1 className="text-2xl text-justify md:text-3xl font-bold">
          Your most unhappy customers are your greatest source of learning.
        </h1>
        <h3 className="text-lg font-semibold text-gray-500">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts.
        </h3>
        <img
          src="./ast.jpg"
          alt=""
          className="object-cover rounded-xl border-black/20 border-2"
        />
        <article className="text-lg text-gray-400 font-medium flex flex-col gap-4">
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean.
          </p>
          <p>
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia. It is a paradisematic country, in which
            roasted parts of sentences fly into your mouth.
          </p>
          <blockquote className="pl-10 italic border-l-2 border-black">
            The Big Oxmox advised her not to do so, because there were thousands
            of bad Commas, wild Question Marks and devious Semikoli, but the
            Little Blind Text didn’t listen. She packed her seven versalia, put
            her initial into the belt and made herself on the way.
          </blockquote>
          <p>
            Even the all-powerful Pointing has no control about the blind texts
            it is an almost unorthographic life One day however a small line of
            blind text by the name of Lorem Ipsum decided to leave for the far
            World of Grammar.
          </p>
          <p>
            When she reached the first hills of the Italic Mountains, she had a
            last view back on the skyline of her hometown Bookmarksgrove, the
            headline of Alphabet Village and the subline of her own road, the
            Line Lane. Pityful a rethoric question ran over her cheek, then she
            continued her way.
          </p>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean.
          </p>
          <p>
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia. It is a paradisematic country, in which
            roasted parts of sentences fly into your mouth.
          </p>
        </article>
      </section>
      <div className="col-span-2"></div>
    </div>
  );
};

export default Article;
