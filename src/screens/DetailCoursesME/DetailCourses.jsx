import { useState } from "react";
import { SliderRelationCourse } from "./SliderRelationCourse";
import { Space, Tabs, Divider } from "antd";
import "/src/menuTabs.css";
import { InsertCommentCourse } from "./InsertCommentCourse";
import { CommentCourses } from "./CommentCourses";
import { motion } from "framer-motion"
import http from '../../core/services/interceptor'
import {
  BsFillCheckCircleFill,
  BsFillArrowDownCircleFill,
} from "react-icons/bs";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

const DetailCourses = () => {
  const [articelList, setArticelList] = useState([
    {
      title: " 1آموزش جامع طراحی وب",
      date: "1402/07/19",
    },
    {
      title: " 2آموزش جامع طراحی وب",
      date: "1402/07/18",
    },
    {
      title: " 3آموزش جامع طراحی وب",
      date: "1402/07/17",
    },
    {
      title: " 4آموزش جامع طراحی وب",
      date: "1402/07/20",
    },
    {
      title: " 2آموزش جامع طراحی وب",
      date: "1402/07/16",
    },
    {
      title: " 3آموزش جامع طراحی وب",
      date: "1402/07/11",
    },
    {
      title: " 4آموزش جامع طراحی وب",
      date: "1402/07/17",
    },
    {
      title: " آموزش جامع طراحی وب",
      date: "1300/07/18",
      title: " آموزش جامع طراحی وب",
      date: "1300/07/18",
    },
    {
      title: " 2آموزش جامع طراحی وب",
      date: "1401/07/19",
    },
    {
      title: " 3آموزش جامع طراحی وب",
      date: "1400/07/19",
    },
    {
      title: " 4آموزش جامع طراحی وب",
      date: "1399/07/19",
    },
  ]);

  const courseId = useParams();
  
  const getDetailCourse = async () =>{
    const result = await http.get(`/Home/GetCourseDetails?CourseId=${ courseId.id}`)
    return result;
  }

  const {data , status} = useQuery('courseQuery', getDetailCourse)

  status === 'success' &&  console.log(courseId.id);


  return (
    <>
      {/* Global Container */}
      <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.3}} className="w-full flex  flex-col  font-irSans bg-zinc-100 mx-auto p-5 dark:bg-slate-600 ">
        {/* Top Container */}
        {/* sm:flex-row */}
        <div className="flex flex-col-reverse md:flex-row">
          {/* Right Side */}
          <motion.div initial={{opacity:0, x:100}} animate={{opacity:1, x:0}} transition={{delay:0.3}} className="w-full flex flex-col gap-6 lg:w-2/3  mx-auto justify-center   ps-4">
            <div className="flex  flex-col md:flex-row justify-start gap-6   md:gap-16  lg:gap-28 ">
              {/*title */}
              <div className="flex gap-2 md:flex-col">
                <p className="text-sm font-bold whitespace-nowrap font-irSans">
                  عنوان دوره :
                </p>
                <p className="text-[13px] font-semibold whitespace-nowrap font-irSans">
                  دوره جامع آموزش ری اکت
                </p>
              </div>
              {/*category */}
              <div className="flex  gap-2 md:flex-col">
                <p className="text-sm font-bold whitespace-nowrap font-irSans">
                  مدرس دوره  :
                </p>
                <p className="text-[13px] font-semibold whitespace-nowrap font-irSans">
                  مقاله
                </p>
              </div>
            </div>
            {/*content article right side */}
            <div className="flex flex-col">
              <p className="text-sm font-bold font-irSans"> درباره ی دوره :</p>
              <p className="w-4/5 text-sm text-justify font-irSans">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
                نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
                کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
                جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را
                برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در
                زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و
                دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و
                زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات
                پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
              </p>
            </div>
            {/*end content article right side */}

            {/*More Information  Section*/}
            <div className="flex flex-col gap-3">
              <div>
                <p className="font-bold text-sm  font-irSans">اطلاعات بیشتر:</p>
              </div>
              <div className="flex flex-col gap-3 pr-2">
                <div className="flex flex-row gap-2">
                  <BsFillCheckCircleFill className=" rounded-full text-secondary w-4 h-4" />

                  <p className="text-[13px]  font-bold font-irSans">
                   شهریه ی دوره:
                  </p>
                  <span className=" text-[13px]">1402/07/19</span>
                </div>
                <div className="flex flex-row gap-2">
                  <BsFillCheckCircleFill className=" rounded-full text-secondary w-4 h-4" />
                  <p className="text-[13px]  font-bold font-irSans">
                   ترم ارائه شده ی دوره:
                  </p>
                  <span className="text-[13px] font-irSans">مقاله</span>
                </div>
                <div className="flex flex-row gap-2">
                  <BsFillCheckCircleFill className=" rounded-full text-secondary w-4 h-4" />
                  <p className="text-[13px]  font-bold font-irSans">
                   تاریخ شروع دوره  :
                  </p>
                  <span className="text-[13px] font-irSans">1402/08/23</span>
                </div>
                <div className="flex flex-row gap-2">
                  <BsFillCheckCircleFill className=" rounded-full text-secondary w-4 h-4" />
                  <p className="text-[13px]  font-bold font-irSans">
                  تاریخ پایان دوره:
                  </p>
                  <span className="text-[13px] font-irSans">1402/8/23</span>
                </div>
                <div className="flex flex-row gap-2">
                  <BsFillCheckCircleFill className=" rounded-full text-secondary w-4 h-4" />
                  <p className="text-[13px]  font-bold font-irSans">
                   ظرفیت دوره:
                  </p>
                  <span className="text-[13px] font-irSans">40 نفر</span>
                </div>
                <div className="flex flex-row gap-2">
                  <BsFillCheckCircleFill className=" rounded-full text-secondary w-4 h-4" />
                  <p className="text-[13px]  font-bold font-irSans">
                   تعداد دانشجویان دوره:
                  </p>
                  <span className="text-[13px] font-irSans">20 نفر</span>
                </div>
              </div>
            </div>
            {/*end More Information  Section*/}
          </motion.div>
          {/* end Right Side */}
          {/* Left Side */}
          <motion.div initial={{opacity:0, x:-100}} animate={{opacity:1, x:0}} transition={{delay:0.3}}>
            {/* Images */}
            <div className="w-full  mx-auto justify-center  ">
              <img
                src="/public/assets/img/detailNewsPic.webp"
                className="mx-auto justify-center"
                alt="newsPic"
              />
            </div>
          </motion.div>
          {/* end Left Side */}
        </div>

        {/* end Top Container */}

        {/*Border Split Top and Below*/}
        <motion.div initial={{opacity:0, y:-100}} animate={{opacity:1, y:0}} transition={{delay:0.5}} className="w-full mt-14 mb-6">
          <div className="w-full  border-2 border-bg-bgBorderSplit"></div>
          <div className="mx-auto relative bottom-4  items-center  bg-zinc-100  w-fit h-fit px-3">
            <p className="text-sm text-center font-irSans md:text-lg dark:text-slate-800">
              دوره های مرتبط
            </p>
          </div>
        </motion.div>
        {/* end Border Split Top and Below */}

        {/*The ListOf Related news and articles */}
        <motion.div initial={{opacity:0, y:100}} animate={{opacity:1, y:0}} transition={{delay:0.7}} >
          <SliderRelationCourse className="px-2 pb-2" articelList={articelList} />
        </motion.div>
      </motion.div>
      {/*end Global Container */}
    </>
  );
};
export { DetailCourses };