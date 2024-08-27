import React, { useEffect, useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Button, TextField, List, ListItem, ListItemText } from '@mui/material';
import { useAppContext } from '../context/AppContext';


interface Category {
  id: number;
  name: string;
}

interface FormValues {
  name: string;
}

const CategoryPage: React.FC = () => {
  const { user, setUser } = useAppContext();
  const [categories, setCategories] = useState<Category[]>([]);
  const [editingCategory, setEditingCategory] = useState<Category | null>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('http://localhost:8080/categories');
        const data: Category[] = await response.json();
        setCategories(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCategories();
  }, []);

  const validationSchema = Yup.object({
    name: Yup.string().required('Category name is required'),
  });

  const handleSubmit = async (values: FormValues) => {
    try {
      if (editingCategory) {
        await fetch(`http://localhost:8080/categories/${editingCategory.id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(values),
        });
      } else {
        await fetch('http://localhost:8080/categories', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(values),
        });
      }
      const response = await fetch('http://localhost:8080/categories');
      const data: Category[] = await response.json();
      setCategories(data);
      setEditingCategory(null);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await fetch(`http://localhost:8080/categories/${id}`, {
        method: 'DELETE',
      });
      const response = await fetch('http://localhost:8080/categories');
      const data: Category[] = await response.json();
      setCategories(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <button onClick={() => setUser(null)}>Logout</button>
      
      <Formik
        initialValues={{ name: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <Field
              as={TextField}
              name="name"
              label="Category Name"
              variant="outlined"
              fullWidth
              margin="normal"
              error={touched.name && Boolean(errors.name)}
              helperText={touched.name && errors.name}
            />
            <Button type="submit" variant="contained">
              {editingCategory ? 'Update' : 'Add'} Category
            </Button>
          </Form>
        )}
      </Formik>
      <List>
        {categories.map(category => (
          <ListItem key={category.id}>
            <ListItemText primary={category.name} />
            <Button onClick={() => setEditingCategory(category)} variant="contained">Edit</Button>
            <Button onClick={() => handleDelete(category.id)} variant="contained">Delete</Button>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default CategoryPage;
