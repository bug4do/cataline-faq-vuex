import Question from "./Question";

export default interface FAQCategory {
    id: number;
    title: string;
    icon: string;
    questions: Question[];
}