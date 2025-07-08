import BasicAccordion from "@/components/atom/accordion";

export const FaqSection = () => {
  const accordionItems = [
    {
      id: 1,
      title: "What does Piptan do exactly?",
      content: (
        <p>
          We design and execute investment strategies, manage risk, and offer
          financial consulting to both individuals and organizations.
        </p>
      ),
    },
    {
      id: 2,
      title: "Who do you work with?",
      content: (
        <p>
          We serve individual investors, family offices, startups, corporations,
          nonprofits, and government entities.
        </p>
      ),
    },
    {
      id: 3,
      title: "Can you guarantee results?",
      content: (
        <p>
          While returns are market-dependent, our disciplined, data-backed
          process consistently delivers measurable outcomes.
        </p>
      ),
    },
    {
      id: 4,
      title: "How do I get started?",
      content: (
        <p>Book a free consultation or speak with one of our advisors today.</p>
      ),
    },
  ];
  return (
    <section className="bg-background text-foreground py-20">
      <div className="container grid grid-cols-2 gap-6">
        <BasicAccordion
          items={accordionItems}
          allowMultiple={true}
          defaultExpandedIds={[1]}
          className="bg-background border"
        />
      </div>
    </section>
  );
};
