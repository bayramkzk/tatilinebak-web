import {
  Button,
  Grid,
  NumberInput,
  Stack,
  Textarea,
  TextInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { IconAt, IconLetterCase, IconPhone, IconSend } from "@tabler/icons";
import React from "react";

const INPUT_SIZE = "lg";
const LABEL_PROPS = { style: { marginBottom: 6 } };

export interface ContactFormProps {}

const checkOptionalPhone = (number: number | undefined) => {
  const phone = String(number || "");
  if (phone.length === 0) return true;
  return /^\d{10}$/.test(phone);
};

const ContactForm: React.FC<ContactFormProps> = () => {
  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      phone: undefined as number | undefined,
      subject: "",
    },
    validate: (values) => ({
      name: !values.name.trim() && "İsim boş bırakılamaz",
      email: !values.email.trim() && "E-posta boş bırakılamaz",
      phone:
        !checkOptionalPhone(values.phone) &&
        "Telefon numarası giriliyorsa 10 haneli olmalıdır",
      subject: !values.subject.trim() && "E-posta konusu boş bırakılamaz",
    }),
  });

  const onSubmit = form.onSubmit((values) => {
    console.log(values);
  });

  return (
    <form onSubmit={onSubmit}>
      <Grid grow align="center">
        <Grid.Col span={12} md={6}>
          <Stack>
            <TextInput
              withAsterisk
              label="İsim"
              labelProps={LABEL_PROPS}
              placeholder="İsim"
              icon={<IconLetterCase />}
              size={INPUT_SIZE}
              {...form.getInputProps("name")}
            />

            <TextInput
              withAsterisk
              type="email"
              label="E-posta adresi"
              labelProps={LABEL_PROPS}
              placeholder="E-posta adresi"
              icon={<IconAt />}
              size={INPUT_SIZE}
              {...form.getInputProps("email")}
            />

            <NumberInput
              hideControls
              label="Telefon numarası"
              labelProps={LABEL_PROPS}
              placeholder="Telefon numarası"
              icon={<IconPhone />}
              size={INPUT_SIZE}
              maxLength={10}
              {...form.getInputProps("phone")}
            />
          </Stack>
        </Grid.Col>

        <Grid.Col span={12} md={6}>
          <Textarea
            withAsterisk
            label="Konu"
            labelProps={LABEL_PROPS}
            placeholder="Konu"
            size={INPUT_SIZE}
            minRows={8}
            autosize
            {...form.getInputProps("subject")}
          />
        </Grid.Col>

        <Grid.Col span={12} md={2} mt="lg">
          <Button
            size={INPUT_SIZE}
            fullWidth
            rightIcon={<IconSend />}
            type="submit"
          >
            Gönder
          </Button>
        </Grid.Col>
      </Grid>
    </form>
  );
};

export default ContactForm;
