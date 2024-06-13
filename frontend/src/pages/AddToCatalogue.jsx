import { Button, Container, Form } from "react-bootstrap";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import NavigationBar from "../components/NavBar";

const schema = z.object({
  name: z
    .string({
      required_error: "Username is required",
    })

    .min(1, { message: "Username is required" }),

  description: z
    .string({
    required_error: "Description is required",
  })

    .min(1, { message: "Description is required" }),
    image: z
		.string({
			required_error: 'Image is required',
		})
		.min(1, { message: 'Image is required' })
		.url({ message: 'Enter a valid image url' }),
 
  date_published: z.string({
    required_error: "Date Published is required",
  }),
});

const AddToCatalogue = () => {
  const { control, handleSubmit, formState } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      description: "",
      image: "",
      date_published: "",
    },
  });

  console.log(formState.errors);

  const onSubmit = (values) => {
    console.log(values);
  };
  return (
    <Container>
      <NavigationBar />

      <Form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="name"
          control={control}
          render={({ field, fieldState }) => (
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="Username" {...field} />
              {fieldState.invalid && (
                <Form.Text className="text-danger">
                  {fieldState.error.message}
                </Form.Text>
              )}
            </Form.Group>
          )}
        />
        <Controller
          name="description"
          control={control}
          render={({ field, fieldState }) => (
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Description"
                {...field}
              />

              {fieldState.invalid && (
                <Form.Text className="text-danger">
                  {fieldState.error.message}
                </Form.Text>
              )}
            </Form.Group>
          )}
        />
        <Controller
          name="image"
          control={control}
          render={({ field, fieldState }) => (
            <Form.Group className="mb-3">
              <Form.Label>Image</Form.Label>
              <Form.Control type="url" placeholder="Image" {...field} />

              {fieldState.invalid && (
                <Form.Text className="text-danger">
                  {fieldState.error.message}
                </Form.Text>
              )}
            </Form.Group>
            
          )}
        />
        
        <Controller
          name="date_published"
          control={control}
          render={({ field, fieldState }) => (
            <Form.Group className="mb-3">
              <Form.Label>Date published</Form.Label>
              <Form.Control
                type="datetime-local"
                placeholder="Date published"
                {...field}
              />

              {fieldState.invalid && (
                <Form.Text className="text-danger">
                  {fieldState.error.message}
                </Form.Text>
              )}
            </Form.Group>
          )}
        />
        <Form.Check
              required
              name="terms"
              label="Agree to terms and conditions"
              feedbackType="invalid"
              id="validationFormik106"
              feedbackTooltip
            />
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default AddToCatalogue;
