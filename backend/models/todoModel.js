import mongoose, { Schema } from "mongoose";
const todoSchema = new Schema(
	{
		text: { type: String, required: true },
		done: { type: Boolean, default: false },
	},
	{
		timestamps: true,
	}
);
const Todo = mongoose.models?.Todo || mongoose.model("Todo", todoSchema);

export default Todo;

// import mongoose, { Document, Schema, Model } from "mongoose";

/* // Defining the structure of a todo item using TypeScript interfaces
export interface ITodo {
	text: string;
	done: boolean;
} */

/* // Merging ITodo interface with mongoose's Document interface to create
// a new interface that represents a todo document in MongoDB
export interface ITodoDocument extends ITodo, Document {
	createdAt: Date;
	updatedAt: Date;
} */

/* const todoSchema: Schema = new Schema<ITodoDocument>(
	{
		text: { type: String, required: true },
		done: { type: Boolean, default: false },
	},
	{
		// Automatically add 'createdAt' and 'updatedAt' fields to the document
		timestamps: true,
	}
); */

// Creating a mongoose model for the todo document
// const Todo: Model<ITodoDocument> = mongoose.models?.Todo || mongoose.model("Todo", todoSchema);

// export default Todo;
