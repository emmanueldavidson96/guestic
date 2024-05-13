import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { MdTranslate, MdCurrencyRupee } from "react-icons/md";

const LangCurr = () => {
  return (
    <section className="lang__curr hidden md2:flex border-[1px] border-medium_gray rounded-[10px] p-1 text-medium_gray md2:items-center text-sm">
      <Select>
        <SelectTrigger
          className="w-auto outline-none border-none flex gap-2 items-center justify-center lang__select px-2 py-0 my-0"
          style={{ fontSize: "14px" }}
        >
          <SelectValue
            placeholder="(English)"
            className="text-sm"
            style={{ fontSize: "12px", backgroundColor: "green" }}
          />
          <MdTranslate className="text-black size-4" />
        </SelectTrigger>
        <SelectContent className="text-sm">
          <SelectItem value="yoruba">Yoruba</SelectItem>
          <SelectItem value="igbo">Igbo</SelectItem>
          <SelectItem value="hausa">Hausa</SelectItem>
        </SelectContent>
      </Select>

      <Separator orientation="vertical" className="w-[1px] h-[25px] bg-black" />

      <Select>
        <SelectTrigger
          className="w-auto outline-none border-none flex gap-2 items-center justify-center lang__select px-2 py-0 my-0"
          style={{ fontSize: "14px" }}
        >
          <SelectValue
            placeholder="(USD)"
            className="text-sm"
            style={{ fontSize: "12px", backgroundColor: "green" }}
          />
          <MdCurrencyRupee className="text-black size-4" />
        </SelectTrigger>
        <SelectContent className="text-sm">
          <SelectItem value="usd">USD</SelectItem>
          <SelectItem value="eur">EUR</SelectItem>
          <SelectItem value="ngn">NGN</SelectItem>
        </SelectContent>
      </Select>
    </section>
  );
};

export default LangCurr;
