import Roles from "./Roles";

const rolesData = [
  {
    id: 1,
    title: "Secondary School Certificate (SSC)",
    description:
      <p>Islamee Adarsha high school  <br />
      Year: 2022
      </p>,
  },
  {
    id: 2,
    title: "Higher School Certificate (HSC)",
    description:
      <p>Government Rupnagar model school & College <br />
      Year: 2024
      </p>,
  },
  {
    id: 3,
    title: "B.Sc Engineering in Computer Science",
    description:
      <p>Prime University <br />
      Currently Studying
      </p>,
  },
];

const Profession = () => {
  return (
    <div
      className="content mt-[20px] md:mt-0 grid md:grid-cols-2 max-xxl:px-4 xxl:px-2 py-10 md:py-15 lg:py-37.5"
      id="services"
    >
      <div className="flex flex-col justify-between h-fit md:pe-8 lg:pe-35.75 max-md:text-center my-auto">
        <p className="section-title max-md:text-center">Education</p>
        <div className="mt-6 text-[14px]">
          <p className="text-xs sm:text-lg font-normal text-gray-400 mb-4">
            I am currently pursuing a Bachelor’s in Computer Science and Engineering (CSE).
            I am learning programming, web development, and software design, focusing on building practical projects that strengthen my coding skills.
          </p>
          <p className="text-xs sm:text-lg font-normal text-gray-400">
            Through my coursework and personal projects, I am gaining experience in creating functional and user-friendly applications while continuing to expand my knowledge in modern technologies.
          </p>
        </div>
        <a
          href="#!"
          className="mt-5 md:mt-12.5 btn btn-primary text-white w-fit md:py-3 md:px-6 text-[12px] sm:text-[16px] font-semibold max-md:mx-auto max-md:mb-5"
        >
          Say Hello!
        </a>
      </div>
      <div className="">
        {rolesData.map((role, index) => (
          <Roles role={role} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Profession;
