import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import {
  Stack,
  Input,
  Button,
  Checkbox,
  CheckboxGroup,
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
  const onSubmit = (data: any) => {
    console.log(data);
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
              <Stack spacing={7}>
                <Input
                  required
                  variant="flushed"
                  placeholder="First Name"
                  _placeholder={{ color: 'gray' }}
                  {...register('firstname')}
                />
                <Input
                  required
                  variant="flushed"
                  placeholder="Last Name"
                  _placeholder={{ color: 'gray' }}
                  {...register('lastname')}
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
                  placeholder="Zipcode"
                  minLength={5}
                  maxLength={5}
                  _placeholder={{ color: 'gray' }}
                  {...register('zip')}
                />
                <FormLabel color="gray" fontWeight={400}>
                  Birth Date
                </FormLabel>
                <Input
                  id="birthdate"
                  placeholder="Birth Date"
                  type="date"
                  {...register('birthdate', { required: true })}
                />
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
