export const booksType = {
  name: "booksType",
  title: "booksType",
  type: "document",
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required().min(3).error('A title is required.'),
    },
    {
      name: 'author',
      title: 'Author',
      type: 'string',
      validation: (Rule) => Rule.required().error('Author name is required.'),
    },
    {
      name: 'isbn',
      title: 'ISBN',
      type: 'string',
      description: 'The unique ISBN identifier for the book.',
      validation: (Rule) =>
        Rule.required()
          .regex(/^\d{10}(\d{3})?$/, {
            name: 'ISBN', // Error message name
            invert: false, // If true, flips the rule (fails if matches)
          })
          .error('Please enter a valid ISBN number (10 or 13 digits).'),
    },
    {
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true, // Enable image cropping
      },
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'A brief summary of the book.',
      validation: (Rule) =>
        Rule.max(500).error('Description should not exceed 500 characters.'),
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Fiction', value: 'fiction' },
          { title: 'Non-Fiction', value: 'non-fiction' },
          { title: 'Science', value: 'science' },
          { title: 'Philosophy', value: 'philosophy' },
          { title: 'Others', value: 'others' },
        ],
        layout: 'dropdown',
      },
    },
    {
      name: 'publishedYear',
      title: 'Published Year',
      type: 'number',
      validation: (Rule) =>
        Rule.min(1000)
          .max(new Date().getFullYear())
          .error('Enter a valid year.'),
    },
    {
      name: 'availability',
      title: 'Availability',
      type: 'boolean',
      description: 'Indicates whether the book is available for borrowing.',
    },
    {
      name: 'rating',
      title: 'Rating',
      type: 'number',
      description: 'Rating of the book (1-5 stars)',
      validation: (Rule) =>
        Rule.min(1).max(5).error('Rating must be between 1 and 5.'),
    },
    {
      name: 'borrowCount',
      title: 'Borrow Count',
      type: 'number',
      description: 'Tracks how many times the book has been borrowed.',
      initialValue: 0,
    }
  ],
};
