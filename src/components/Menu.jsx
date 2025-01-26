import cardData from "@/data/data";
import { Cards } from "@/components/Cards";

export default function Menu() {
  return (
    <section className="p-8">
      <h2 className="text-2xl font-bold text-center mb-8">Our Menu</h2>
      <div className="grid grid-cols-1 md:grid-cols-2  gap-4 ">
        {cardData.map((card) => {
          return (
            <Cards
              key={card.id}
              image={card.image}
              category={card.category}
              title={card.title}
              description={card.description}
              link={card.link}
            />
          );
        })}
      </div>
    </section>
  );
}
