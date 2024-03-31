"use client";
import { DateContext } from "@/context/DateContext";
import React, { useContext } from "react";
import Link from "next/link";

const Archives = ({ dates }: any) => {
  const { changeDate } = useContext(DateContext);

  const handleDateClick = (publishedAt: Date) => {
    changeDate(publishedAt);
  };

  return (
    <div className="p-4">
      <h4 className="fst-italic">Time Travel To ? </h4>
      <ol className="list-unstyled mb-0">
        {dates?.map((date: any,index:any) => (
          <li key={index}>
            <Link onClick={() => handleDateClick(date)}
             href={`/categories/${date}`}>
                {date}
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Archives;
