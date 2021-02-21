import React, { useCallback, useRef } from 'react';
import { FaDonate, FaPhoneAlt, FaRegCreditCard } from 'react-icons/fa';
import { FiCheck, FiMail, FiUser } from 'react-icons/fi';
import { MdAccessible, MdDirectionsCar, MdStarHalf } from 'react-icons/md';

import { FormHandles } from '@unform/core';
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { GoogleSpreadsheet } from 'google-spreadsheet';
import * as Yup from 'yup';

import designRemovebg from '../../../assets/design-removebg-preview.png';
import { useLoading } from '../../../hooks/loading';
import { useToast } from '../../../hooks/toast';
import getValidationErros from '../../../utils/getValidationErros';
import * as masks from '../../../utils/masks';
import { schemaValidationPhone } from '../../../utils/schema';
import Input from '../../Form/Input02';
import InputTextArea from '../../Form/InputTextArea';
import {
  Container,
  Form,
  Button,
  Content,
  Point,
  Arrow,
  Line,
  ArrowType,
} from './styles';

interface FormData {
  name: string;
  email: number;
  phone: string;
  message: string;
}

const SectionForm: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();

  const { addLoading, removeLoading } = useLoading();

  // spreadsheet key is the long id in the sheets URL

  const SPREADSHEET_ID = process.env.REACT_APP_SPREADSHEET_ID;
  const SHEET_ID = process.env.REACT_APP_SHEET_ID;
  const CLIENT_EMAIL = process.env.REACT_APP_GOOGLE_CLIENT_EMAIL;
  const PRIVATE_KEY = process.env.REACT_APP_GOOGLE_SERVICE_PRIVATE_KEY?.replace(
    /\\n/g,
    '\n',
  );

  const handleSubmit = useCallback(
    async (data: FormData, { reset }) => {
      try {
        formRef.current?.setErrors({});

        addLoading({
          loading: true,
          description: 'Aguarde ...',
        });

        const schema = Yup.object().shape({
          name: Yup.string().required('Nome obrigatório!'),
          phone: schemaValidationPhone,
          message: Yup.string().required('Deve inserir sua mensagem!'),
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um email válido'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        const row = {
          name: `${data.name}`,
          email: data.email,
          message: data.message,
          phone: data.phone.replace('+', ''),
          date: format(new Date(), 'dd/MM/yyyy HH:mm', {
            locale: ptBR,
          }),
          status: false,
        };

        const doc = new GoogleSpreadsheet(SPREADSHEET_ID);

        await doc.useServiceAccountAuth({
          client_email: CLIENT_EMAIL,
          private_key: String(PRIVATE_KEY),
        });

        await doc.loadInfo();

        const sheet = doc.sheetsById[String(SHEET_ID)];

        await sheet.addRow(row);

        reset();

        addToast({
          type: 'success',
          title: 'Informações!',
          description: 'Mensagem enviada com sucesso!',
        });
      } catch (err) {
        console.log('=>>>>', err);

        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErros(err);
          formRef.current?.setErrors(errors);
        }

        addToast({
          type: 'error',
          title: 'Falha no cadastro!',
          description:
            'Ocorreu uma falha ao tentar enviar a mensagem, tente novamente!',
        });
      } finally {
        removeLoading();
      }
    },
    [
      addToast,
      SPREADSHEET_ID,
      addLoading,
      removeLoading,
      formRef,
      PRIVATE_KEY,
      CLIENT_EMAIL,
      SHEET_ID,
    ],
  );

  return (
    <Container>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <ArrowType>
          <Line />
          <Point />
        </ArrowType>
        <fieldset>
          <legend>Contato!</legend>

          <Input placeholder="Nome" name="name" icon={FiUser} label="Nome" />
          <Input
            placeholder="E-mail"
            name="email"
            icon={FiMail}
            label="E-mail"
          />
          <Input
            id="phone"
            name="phone"
            icon={FaPhoneAlt}
            label="Fone"
            placeholder="Fone"
            onChange={masks.phoneMask.onChange}
          />
          <InputTextArea
            id="message"
            name="message"
            label="Sua mensagem"
            placeholder="Escreva aqui!"
          />
        </fieldset>

        <Button type="submit">
          <span>
            <FiCheck />
          </span>
          <strong>Enviar</strong>
        </Button>
      </Form>
      <Content>
        <section>
          <span>14 DAYS</span>
          <span>RETURN</span>
          <p>
            We provide a 14-day test drive, to see if your car truly fits into
            your life. If it doesn’t, simply return it.
          </p>
        </section>
      </Content>
    </Container>
  );
};

export default SectionForm;
