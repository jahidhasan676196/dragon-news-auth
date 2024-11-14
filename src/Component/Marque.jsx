import Marquee from "react-fast-marquee";

const Marque = () => {
    return (
        <div className="mt-8 flex bg-[#F3F3F3] ">
            <button className="btn bg-[#D72050] text-white">Latest</button>
            <Marquee>
            Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
            </Marquee>
        </div>
    );
};

export default Marque;