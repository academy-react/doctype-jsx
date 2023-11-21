import React from "react";
import { DetailCourses } from "./DetailCourses";
import { CommentCourses } from "./CommentCourses";
import { InsertCommentCourse } from "./InsertCommentCourse";
import { useState } from "react";
import {motion} from 'framer-motion'

const MenuDetailCourses = () => {
  const [details, setDetails] = useState(true);
  const [comments, setComments] = useState(false);
  const [insertComment, setInsertComment] = useState(false);

  const detailShowHandler = () => {
    setDetails(true);
    setComments(false);
    setInsertComment(false);
  };
  const commentShowHandler = () => {
    setDetails(false);
    setComments(true);
    setInsertComment(false);
  };
  const insertShowHandler = () => {
    setDetails(false);
    setComments(false);
    setInsertComment(true);
  };

  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.3}} className="w-full md:w-5/6 px-2 md:px-4 mx-auto font-irSans">
      {/* top nav */}
      <ul className="flex bg-[#f3f3f3] dark:bg-slate-600 w-full justify-center  md:w-max px-2 py-2 ">
        <li
          onClick={detailShowHandler}
          className={
            details
              ? "px-4 after:w-full after:h-0.5  after:md:h-1 relative after:bg-secondary after:absolute after:-bottom-2 after:left-0 cursor-pointer font-irSans md:text-lg font-bold "
              : "after:hidden px-4 font-irSans text-[12px] md:text-lg  whitespace-nowrap cursor-pointer "
          }
        >
          جزئیات دوره
        </li>
        <li
          onClick={commentShowHandler}
          className={
            comments
              ? "px-4 after:w-full after:h-0.5  after:md:h-1 relative after:bg-secondary after:absolute after:-bottom-2 after:left-0 font-irSans cursor-pointer text-lg  font-bold"
              : "after:hidden  px-4 font-irSans  text-[15px] md:text-lg  whitespace-nowrap  cursor-pointer"
          }
        >
          نظرات
        </li>
        <li
          onClick={insertShowHandler}
          className={
            insertComment
              ? "px-4 after:w-full after:h-0.5  after:md:h-1 relative after:bg-secondary after:absolute after:-bottom-2 after:left-0 font-irSans cursor-pointer text-lg font-bold"
              : "after:hidden  px-4 font-irSans text-[15px] md:text-lg whitespace-nowrap  cursor-pointer"
          }
        >
          درج نظر
        </li>
      </ul>
      {/* body Page */}
      <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.3}} className="flex flex-col md:flex-row-reverse bg-[#f3f3f3] dark:bg-slate-600">
        {details && <DetailCourses />}
        {comments && <CommentCourses />}
        {insertComment && <InsertCommentCourse />}
      </motion.div>
    </motion.div>
  );
};

export { MenuDetailCourses };