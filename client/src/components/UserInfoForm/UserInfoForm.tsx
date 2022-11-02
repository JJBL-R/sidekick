import { useEffect, useContext } from 'react';
import UserContext from '../../app/UserContext';
import { useForm } from 'react-hook-form';
import {
  Stack,
  Input,
  Button,
  Checkbox,
  CheckboxGroup,
  Textarea,
} from '@chakra-ui/react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
} from '@chakra-ui/react';
import { FormLabel } from '@chakra-ui/react';

const UserInfoForm = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { register, handleSubmit, reset } = useForm();

  const { user }: any = useContext(UserContext);

  const onSubmit = (data: any) => {
    fetch('/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...data, google_id: user.google_id }),
    }).then(() => console.log(data));
    reset();
  };

  useEffect(() => onOpen());

  return (
    <div className="user-info-form">
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign="center" fontFamily="Poppins" fontSize="3rem">
            <h1>Register for Sidekick</h1>
          </ModalHeader>
          <ModalBody>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Stack spacing={5}>
                <Input
                  required
                  variant="flushed"
                  placeholder="First Name"
                  _placeholder={{ color: 'gray' }}
                  {...register('first_name')}
                />
                <Input
                  required
                  variant="flushed"
                  placeholder="Last Name"
                  _placeholder={{ color: 'gray' }}
                  {...register('last_name')}
                />
                <Input
                  required
                  variant="flushed"
                  placeholder="Email"
                  _placeholder={{ color: 'gray' }}
                  {...register('email')}
                />
                <Input
                  required
                  variant="flushed"
                  placeholder="City"
                  _placeholder={{ color: 'gray' }}
                  {...register('city')}
                />
                <Input
                  required
                  variant="flushed"
                  placeholder="Zipcode"
                  minLength={5}
                  maxLength={5}
                  _placeholder={{ color: 'gray' }}
                  {...register('zipcode')}
                />
                <FormLabel color="gray" fontWeight={400}>
                  Birth Date
                </FormLabel>
                <Input
                  id="birthDate"
                  placeholder="Birth Date"
                  type="date"
                  {...register('birthdate', { required: true })}
                />
                <FormLabel color="gray" fontWeight={400}>
                  Bio
                </FormLabel>
                <Textarea placeholder="" />
                <CheckboxGroup colorScheme="red">
                  <FormLabel color="gray" fontWeight={400}>
                    Sports
                  </FormLabel>
                  <Stack spacing={[1, 5]} direction={['column', 'row']}>
                    <Checkbox value="tennis" {...register('sports')}>
                      Tennis
                    </Checkbox>
                    <Checkbox value="soccer" {...register('sports')}>
                      Soccer
                    </Checkbox>
                    <Checkbox value="basketball" {...register('sports')}>
                      Basketball
                    </Checkbox>
                  </Stack>
                </CheckboxGroup>
                <Button type="submit" colorScheme="red">
                  Submit
                </Button>
              </Stack>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default UserInfoForm;
