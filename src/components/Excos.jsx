import React from 'react';


const Excos = ({ name, role, text, number, email, facebook, twitter, linkedin, imgUrl, className }) => {
  return (
    <div className={`w-full max-w-[1200px] sm:h-auto h-full ${className}`}>
			<div className="app__flex md:w-1/2 px-4 py-16 lg:px-28 sm:px-10 border bg-slate-100">
				<div className="app__flex flex-col gap-6 text-center max-w-[450px]">
					<div>
						<h2 className="font-bold p__text text-4xl text-[#0b8b68]">{name}</h2>
						<h3 className="p__text font-bold text-lg">{role}</h3>
					</div>
					<p className="p__text">{text}</p>
					<div className="app__flex flex-row gap-4">
						<div>{number}</div>
						<div className="flex flex-row gap-1">
							<div className="app__h-div" />
							<div className="app__h-div" />
						</div>
						<div className="cursor-pointer"><a href="#"></a>{email}</div>
					</div>
					<div className="flex justify-center items-center flex-row flex-wrap gap-4">
						<div>{React.cloneElement(facebook, { className: "fill-black hover:fill-[#fcbe27] w-[20px] h-[20px] ease-in duration-300 cursor-pointer" })}</div>
						<div>{React.cloneElement(twitter, { className: "fill-black hover:fill-[#fcbe27] w-[20px] h-[20px] ease-in duration-300 cursor-pointer" })}</div>
						<div>{React.cloneElement(linkedin, { className: "fill-black hover:fill-[#fcbe27] w-[20px] h-[20px] ease-in duration-300 cursor-pointer" })}</div>
					</div>
				</div>
			</div>
			<div className="md:w-1/2 max-h-[550px] border">
				<img className="w-full h-full object-cover object-top" src={imgUrl} alt="img" loading="lazy"/>
			</div>
    </div>
  )
}

export default Excos
