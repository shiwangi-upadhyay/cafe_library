import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'franchiseType',
    title: 'Franchise Type',
    type: 'document',
    fields: [
        defineField({
        name: 'name',
        title: 'Name',
        type: 'string',
        validation: (Rule) => Rule.required().min(3).max(50).error('Franchise name must be between 3 and 50 characters'),
        }),
        defineField({
        name: 'address',
        title: 'Address',
        type: 'string',
        validation: (Rule) => Rule.required().min(5).max(100).error('Address must be between 5 and 100 characters'),
        }),
        defineField({
        name: 'city',
        title: 'City',
        type: 'string',
        validation: (Rule) => Rule.required().min(2).max(50).error('City name must be between 2 and 50 characters'),
        }),
        defineField({
        name: 'state',
        title: 'State',
        type: 'string',
        validation: (Rule) => Rule.required().min(2).max(50).error('State name must be between 2 and 50 characters'),
        }),
    ],
});