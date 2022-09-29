import { Grid } from "@mantine/core";
import { IconMail, IconMapPin, IconPhone } from "@tabler/icons";
import React from "react";
import ContactOption from "./ContactOption";

const ICON_SIZE = 36;

export interface ContactGroupProps {}

const ContactGroup: React.FC<ContactGroupProps> = ({}) => {
  return (
    <Grid grow my={36}>
      <Grid.Col sm={4}>
        <ContactOption
          title="Adresimiz"
          icon={<IconMapPin size={ICON_SIZE} />}
          label="Po Box 65502"
        />
      </Grid.Col>

      <Grid.Col sm={4}>
        <ContactOption
          title="Telefon numaramız"
          icon={<IconPhone size={ICON_SIZE} />}
          href="tel:+90555-123-4567"
          label="0555 123 4567"
        />
      </Grid.Col>

      <Grid.Col sm={4}>
        <ContactOption
          title="E-posta adresimiz"
          icon={<IconMail size={ICON_SIZE} />}
          href="mailto:iletisim@tatilinebak.com"
          label="iletisim@tatilinebak.com"
        />
      </Grid.Col>
    </Grid>
  );
};

export default ContactGroup;
