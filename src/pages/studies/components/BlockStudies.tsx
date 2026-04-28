import type { DataCourses } from "../data/dataCourse";

interface Props {
  data: DataCourses;
}

const BlockStudies = ({ data }: Props) => {
  const { year, courses, img } = data;

  const sizeImgCourse = courses.length === 2 ? "h-24" : "h-48";

  return (
    <div className="w-78 mb-5 flex items-center justify-between text-text-orange md:w-3xl md:mb-0 lg:w-304.25 lg:justify-evenly">
      <div className="w-5 h-10 relative flex items-center md:w-28 md:h-17 lg:w-34.5 lg:h-21.5">
        <span className="w-1/2 h-10 absolute top-0 bottom-0 -z-10 bg-text-pink md:w-1/4 md:h-16 lg:w-14 lg:h-21.5"></span>
        <p className="text-[19px] font-eras_itc z-10 md:text-4xl lg:text-5xl">{year}</p>
      </div>
      <div
        style={{ backgroundImage: `url(${img})` }}
        className={`w-32 ml-4 bg-cover md:w-102.5 md:h-87 md:bg-contain md:bg-center md:bg-no-repeat ${sizeImgCourse} lg:w-111.75`}
      ></div>
      <div className="w-28 md:w-57 lg:w-122.5">
        {courses.map((course, index) => (
          <div
            key={index}
            className={`pb-2 mb-3 animate-opacity-course text-balance md:text-[26px] md:h-37.5 md:p-0 md:m-0 md:flex md:flex-col md:justify-center lg:text-[28px]`}
          >
            <p className="font-medium">{course.title}</p>
            <p className="font-light">{course.institution}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default BlockStudies;
