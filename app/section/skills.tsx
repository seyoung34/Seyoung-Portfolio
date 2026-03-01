import { useRef } from "react";
import { useInView } from "../hooks/useInView";

type Skill = {
    name: string;
    src: string;
    note: string | null; // 분류
};

const skills: Skill[] = [
    {
        name: "TypeScript",
        src: "/skillsImage/typescript.png",
        note: "Language",
    },
    {
        name: "JavaScript",
        src: "/skillsImage/javascript.png",
        note: "Language",
    },
    {
        name: "React",
        src: "/skillsImage/react.png",
        note: "Framework",
    },
    {
        name: "Git",
        src: "/skillsImage/git.png",
        note: "DevOps",
    },
    {
        name: "Supabase",
        src: "/skillsImage/supabase.png",
        note: "DB",
    },
    {
        name: "Next.js",
        src: "/skillsImage/next.webp",
        note: "Framework",
    },
    {
        name: "Tailwind CSS",
        src: "/skillsImage/tailwindcss.png",
        note: "Frontend",
    },
    {
        name: "Three.js",
        src: "/skillsImage/three.png",
        note: "Frontend",
    },
    {
        name: "Figma",
        src: "/skillsImage/figma.png",
        note: "Design",
    },
];

type Props = {
    skill: Skill;
    className?: string;
};

// export default function SkillsGrid() {

//     const sectionRef = useRef<HTMLElement>(null);
//     const inView = useInView(sectionRef, { threshold: 0.5 });


//     return (
//         <section ref={sectionRef} className="min-h-screen w-full flex items-center justify-center flex-col sm:flex-row">
//             <div className={`text-white text-7xl w-1/3 h-full flex items-center justify-center ${inView ? "animate-appear-left" : "opacity-0"}`}>Skills</div>
//             <div className={`w-2/3 h-full flex items-center justify-center ${inView ? "animate-appear-right" : "opacity-0"}`}>
//                 <div className="grid grid-cols-3 gap-4 sm:grid-cols-3 lg:grid-cols-3 w-[90%] p-10">
//                     {skills.map((s) => (
//                         <SkillCard key={s.name} skill={s} />
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// }

function SkillCard({ skill, className }: Props) {
    return (
        <article
            className={[
                "group relative overflow-hidden rounded-[18px] border",
                "bg-surface border-border",

                "transition-[transform,box-shadow,border-color] duration-200 ease-out",
                "hover:-translate-y-1 hover:shadow-[0_16px_34px_rgba(0,0,0,0.35)]",
                "hover:border-[rgba(46,137,228,0.35)]",

                "w-3/4 aspect-square",

                className ?? "",
            ].join(" ")}
            aria-label={skill.name}
        >
            {/* 이미지 */}
            <img
                src={skill.src}
                alt={skill.name}
                loading="lazy"
                className={[
                    "absolute inset-0 h-full w-full object-cover p-2",
                    "scale-[1.02] transition-[transform,filter] duration-200 ease-out",
                    "group-hover:scale-[1.06] group-hover:saturate-[1.05] group-hover:contrast-[1.03]",
                ].join(" ")}
            />

            {/* 오른쪽에서 들어오는 라벨 */}
            <div
                className={[
                    "absolute inset-y-0 right-0 z-10",
                    "w-[70%]",
                    "translate-x-full group-hover:translate-x-0",
                    "transition-transform duration-300 ease-out",

                    "border-l border-border",
                    "bg-surface/90",
                    "backdrop-blur-[6px]",

                    "flex items-center",
                ].join(" ")}
            >
                <div className="px-4">
                    <p className="text-white font-extrabold tracking-[-0.01em] text-[16px]">
                        {skill.name}
                    </p>

                    {skill.note && (
                        <p className="mt-1 text-muted text-[12px] font-semibold">
                            {skill.note}
                        </p>
                    )}


                    <div className="mt-3 h-px w-10 bg-accent opacity-70" />
                </div>
            </div>

            {/* hover 시 전체에 살짝 어두운 오버레이(선택) */}
            <div
                className={[
                    "absolute inset-0",
                    "bg-black/0 group-hover:bg-black/10",
                    "transition-colors duration-200",
                ].join(" ")}
            />
        </article>
    );
}

export default function Skills({ isMobile }: { isMobile: boolean }) {
    const sectionRef = useRef<HTMLElement>(null);
    const inView = useInView(sectionRef, { threshold: isMobile ? 0.25 : 0.5 });

    if (isMobile) {
        console.log(`inView : ${inView}`);
        return (
            <section ref={sectionRef} className="min-h-screen w-full px-4 py-16 flex flex-col">
                <h2 className={`text-6xl font-bold text-white  ${inView ? "animate-appear-left" : "opacity-0"}`}>
                    Skills
                </h2>

                <div className="flex flex-1 items-center justify-center">
                    <div className={`w-full mt-8 grid grid-cols-3 gap-3 ${inView ? "animate-appear" : "opacity-0"}`}>
                        {skills.map((s) => (
                            <SkillCardMobile key={s.name} skill={s} />
                        ))}
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section ref={sectionRef} className="min-h-screen w-full flex items-center justify-center flex-col sm:flex-row">
            <div className={`text-white text-7xl w-1/3 h-full flex items-center justify-center ${inView ? "animate-appear-left" : "opacity-0"}`}>Skills</div>
            <div className={`w-2/3 h-full flex items-center justify-center ${inView ? "animate-appear-right" : "opacity-0"}`}>
                <div className="grid grid-cols-3 gap-4 sm:grid-cols-3 lg:grid-cols-3 w-[90%] p-10">
                    {skills.map((s) => (
                        <SkillCard key={s.name} skill={s} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function SkillCardMobile({ skill }: { skill: Skill }) {
    return (
        <article className="relative overflow-hidden rounded-[16px] border border-border bg-surface aspect-square ">
            <img src={skill.src} alt={skill.name} className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute left-3 bottom-3 rounded-full border border-border bg-bg/70 px-3 py-1 text-[11px] font-semibold text-muted">
                {skill.name}
            </div>
        </article>
    );
}

function SkillCardDesktop({ skill }: { skill: Skill }) {
    return (
        <article className="group relative overflow-hidden rounded-[18px] border border-border bg-surface w-full aspect-square">
            <img src={skill.src} alt={skill.name} className="absolute inset-0 h-full w-full object-cover transition-transform duration-200 group-hover:scale-[1.06]" />
            <div className="absolute inset-y-0 right-0 w-[72%] translate-x-full transition-transform duration-300 ease-out group-hover:translate-x-0 border-l border-border bg-bg/80 backdrop-blur-md flex items-center">
                <div className="px-4">
                    <p className="text-text font-extrabold">{skill.name}</p>
                    {skill.note && <p className="mt-1 text-[12px] font-semibold text-muted">{skill.note}</p>}
                </div>
            </div>
        </article>
    );
}
