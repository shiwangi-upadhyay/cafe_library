import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'booksType',
  title: 'Books Type',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required().min(3).max(100).error('Title must be between 3 and 100 characters'),
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'string',
      validation: (Rule) => Rule.required().min(3).max(50).error('Author name must be between 3 and 50 characters'),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Fiction", value: "fiction" },
          { title: "Non-Fiction", value: "non-fiction" },
          { title: "Science", value: "science" },
          { title: "Philosophy", value: "philosophy" },
          { title: "Others", value: "others" },
        ],
        layout: "dropdown",
      },
      validation: (Rule) => Rule.required().error("Category is required."),
    }),
    defineField({
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      options: {
        hotspot: true, // Enables image cropping
      }
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      description: "A brief summary of the book.",
      validation: (Rule) =>
        Rule.max(500).error("Description should not exceed 500 characters."),
    }),
    defineField({
      name: "rating",
      title: "Rating",
      type: "number",
      description: "Rating of the book (1-5 stars).",
      validation: (Rule) =>
        Rule.min(1).max(5).error("Rating must be between 1 and 5."),
    }),
    defineField({
      name: "borrowCount",
      title: "Borrow Count",
      type: "number",
      description: "Tracks how many times the book has been borrowed.",
      initialValue: 0,
      validation: (Rule) => Rule.min(0).error("Borrow count cannot be negative."),
    }),
    defineField({
      name: "price",
      title: "Price",
      type: "number",
      description: "Price of the book in INR.",
      validation: (Rule) => Rule.min(0).error("Price cannot be negative."),
    }),
    defineField({
      name: 'publishedYear',
      title: 'Published Year',
      type: 'number',
      validation: (Rule) =>
        Rule.required()
          .min(1000)
          .max(new Date().getFullYear())
          .error('Published year must be valid and not in the future'),
    }),
    
    defineField({
      name: 'isbn',
      title: 'ISBN',
      type: 'string',
      validation: (Rule) =>
        Rule.required()
          .regex(/^\d{3}-\d{1,5}-\d{1,7}-\d{1,7}-\d{1}$/)
          .error('ISBN must follow the format 978-3-16-148410-0'),
    }),
    
    defineField({
      name: 'franchiseStock',
      title: 'Franchise Stock',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'location',
              title: 'Location',
              type: 'reference',
              to: [{ type: 'franchiseType' }],
              validation: (Rule) => Rule.required().error('Location reference is required'),
            },
            {
              name: 'stock',
              title: 'Stock',
              type: 'number',
              validation: (Rule) => Rule.required().min(0).error('Stock must be a non-negative number'),
            },
          ],
        },
      ],
      validation: (Rule) => Rule.required().min(1).error('At least one franchise stock entry is required'),
    }),
  ],
});