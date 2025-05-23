import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import banner from "../../public/banner1.jpg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const [longUrl, setLongUrl] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (longUrl) navigate(`/auth?createNew=${longUrl}`);
  };
  return (
    <div className="flex flex-col items-center px-4 sm:px-0">
      <h2 className="my-10 sm:my-16 text-center text-3xl sm:text-6xl lg:text-7xl font-extrabold font-serif">
        The only URL shortner <br /> you &rsquo;ll ever need!👇
      </h2>

      <form
        className="flex sm:flex-row h-10 sm:h-14 justify-center items-center md:w-1/2 gap-3 w-full flex-col"
        onSubmit={handleSubmit}
      >
        <Input
          placeholder="Enter your looping url"
          className="h-full p-4"
          type="url"
          onChange={(e) => setLongUrl(e.target.value)}
          value={longUrl}
        />
        <Button
          className="w-full h-full sm:w-auto"
          type="submit"
          variant={"destructive"}
        >
          Shortner!
        </Button>
      </form>
      <img src={banner} alt="banner logo" className="w-full my-11 md:px-11 " />
      <Accordion type="single" collapsible className=" w-full my-11 md:px-11 ">
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Is it styled?</AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that matches the other
            components&apos; aesthetic.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Is it animated?</AccordionTrigger>
          <AccordionContent>
            Yes. It's animated by default, but you can disable it if you prefer.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Landing;
