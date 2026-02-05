'use client';
import React from 'react';
import Link from 'next/link';
import { Accordion, AccordionItem as Item } from '@szhsin/react-accordion';
import Image from 'next/image';

const whatIsHackathonAnswer = (
  <>
    A hackathon is where you transform your crazy ideas into real projects.
    Hundreds of students from across California form teams around an idea and
    collaboratively create technical solutions to problems we face in our local
    communities. These ideas turn into websites, mobile apps, hardware, and
    more! <br /> <br />
    Join HackDavis to make some of the most imaginative projects alongside
    fellow creators! You take care of building and we'll take care of you.
    <br /> <br /> We will be following the{' '}
    <Link
      style={{
        textDecoration: 'underline',
        fontWeight: 'normal',
      }}
      className="font-[var(--font-metropolis)]"
      href="https://drive.google.com/file/d/1KnWwN5sFYTe49Z5312OKnS5FA8OtL4iD/view"
      target="_blank"
    >
      HackDavis Rules & Policies,
    </Link>{' '}
    <span className="font-[var(--font-metropolis)]"> and </span>
    <Link
      style={{
        textDecoration: 'underline',
        fontWeight: 'normal',
      }}
      className="font-[var(--font-metropolis)]"
      href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf"
      target="_blank"
    >
      MLH's Code Of Conduct.
    </Link>
  </>
);

const whatToHelpAnswer = (
  <>
    HackDavis is largely built upon the efforts of our mentors and volunteers,
    who ensure that our hackers have a great experience at our event! Our mentor
    applications are open and volunteer applications will open up soon, so keep
    an eye out! If you're interested in making a tax-deductible contribution to
    HackDavis, please get in touch with us at{' '}
    <a
      style={{
        textDecoration: 'underline',
        fontWeight: 'normal',
      }}
      className="font-[var(--font-metropolis)]"
      href="mailto:team@hackdavis.io"
    >
      team@hackdavis.io.
    </a>
  </>
);

const AccordionFAQ = () => {
  const faqs = [
    {
      question: 'What is a hackathon?',
      answer: whatIsHackathonAnswer,
    },
    {
      question: 'Who can attend?',
      answer: `HackDavis is open to all undergraduate and graduate students from all majors and all schools, and graduates who have completed their degrees within the past year. We are also open to high school students above the age of 18. As long as you're prepared to learn, brainstorm, and bring life to projects, we welcome you to join us!`,
    },
    {
      question: 'Do I need to know how to code?',
      answer: `Nope! Coming in, you do not need to know how to code, but you have to be willing to learn! HackDavis is proud to be a beginner-focused hackathon, and we welcome hackers from all experience levels and backgrounds - over 65% of our hackers are beginners! HackDavis is the perfect time and place to learn new skills - we host beginner-friendly workshops and our mentors provide guidance to help you build something you can be proud of.`,
    },
    {
      question: 'How do teams work?',
      answer: `Teams can have up to 4 members, and submit a single project together! Want to go solo? Fine by us, but we'd highly recommend joining a team to make new friends, bounce ideas off one another, and bring your ideas to life!`,
    },
    {
      question: 'How can I help?',
      answer: whatToHelpAnswer,
    },
    {
      question: 'Why social good?',
      answer: `We want our attendees to create projects with a meaningful impact and hope to foster a community dedicated to social change. We find that most hackathons often don't result in projects as practical solutions to specific societal problems and we're looking to change that.`,
    },
    {
      question: 'What can I create?',
      answer: `You can build whatever your heart desires, whether it's a web app, mobile app, hardware hack, open source tool, or even a simple website! Any social good oriented project is recommended. Our main focus is to provide you a learning experience where you can have fun, ask questions, and experiment with technology.`,
    },
    {
      question: 'What if I don’t have a team or idea?',
      answer: `Worry not! We will host a series of mixers before HackDavis, so check out our social media for announcements about those as we get closer to the event. We'll also have a final mixer right after hacking starts during HackDavis, so we'll make sure you're equipped and ready to go!

      Our non-profit partners, sponsors, and mentors are always here at the event to help you brainstorm and ideate if you don't have an idea!`,
    },
    {
      question: 'How much does it cost?',
      answer: `Zero. Zip. Zilch. Nada. HackDavis is free for all admitted participants, so don't sweat it! We will provide you with WiFi, meals, caffeine, swag, and workspace for the entire weekend.`,
    },
    {
      question: 'Is travel reimbursement provided?',
      answer: `Unfortunately, we are unable to offer travel reimbursement this year. Participants are responsible for covering their own travel costs.`,
    },
  ];

  return (
    <div className="relative left-1/2 right-1/2 w-screen -mx-[50vw] bg-[url('/Images/faq/faq-bg.svg')] bg-no-repeat bg-[position:top_center] bg-cover">
      <Image
        src="/Images/faq/faqcloud.svg"
        alt="Cloud"
        width={2000}
        height={1200}
        className="absolute z-40 mt-0 -top-[18vw] pointer-events-none"
      />
      <div
        className="relative z-10 flex flex-col text-white m-[10vw] pt-[40vw] pb-[20vw] "
        style={{ height: 'auto' }}
      >
        <br id="faq" />
        <br />
        <h1 className="pb-[4%] text-[4rem] font-bold tracking-[1.28px] text-[var(--text-light)] font-[var(--font-metropolis)] max-[760px]:text-[2.5rem] ">
          FAQ
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="w-full">
            <Accordion transition transitionTimeout={250}>
              {faqs.map(({ question, answer }, index) => (
                <React.Fragment key={index}>
                  <Item
                    key={index}
                    header={
                      <div className="text-white flex w-full flex-row items-center justify-between">
                        <p className="my-[0.5vw] text-[1.25rem] text-white font-bold leading-[45px] tracking-[0.4px] text-[var(--text-light)] font-[var(--font-metropolis)] max-[1048px]:text-base max-[760px]:text-[0.875rem] max-[760px]:leading-[38px]">
                          {question}
                        </p>
                        <div>
                          <div className="absolute -rotate-90 transition-transform duration-300 ease-[cubic-bezier(0,0,0,1)] group-[aria-expanded=true]:rotate-0">
                            <Image
                              src="/Images/faq/plus.svg"
                              alt="expand icon"
                              width={19}
                              height={3}
                              className="max-w-none"
                            />
                          </div>
                          <Image
                            src="/Images/faq/minus.svg"
                            alt="collapse icon"
                            width={19}
                            height={3}
                          />
                        </div>
                      </div>
                    }
                    buttonProps={{
                      className: ({ isEnter }: { isEnter: boolean }) =>
                        `group w-full cursor-pointer border-0 bg-transparent text-left ${
                          isEnter ? '' : ''
                        }`,
                    }}
                    contentProps={{
                      className: 'transition-[height] duration-300 ease-in-out',
                    }}
                  >
                    <p className="pb-[2%] text-[1rem] font-normal leading-[30px] tracking-[0.4px] text-[var(--text-light)] font-[var(--font-metropolis)] max-[760px]:text-[0.75rem] max-[760px]:leading-[21px] max-[760px]:my-[5vw]">
                      {answer}
                    </p>
                  </Item>
                  {index < faqs.length - 1 && <hr />}
                </React.Fragment>
              ))}
            </Accordion>
          </div>
          <div className="hidden md:flex items-center justify-center translate-x-20">
            <Image
              src="/Images/hero/Cow.svg"
              alt="HD Cow"
              width={1000}
              height={1000}
              className="animate-float-bob will-change-transfor"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccordionFAQ;
