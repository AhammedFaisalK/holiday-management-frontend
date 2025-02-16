import React from 'react';
import dayjs from 'dayjs';
import { Dialog, Transition } from '@headlessui/react';

const HolidayDetailModal = ({ isOpen, onClose, holiday }) => {
  if (!holiday) return null;

  return (
    <Transition show={isOpen} as={React.Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto"
        onClose={onClose}
      >
        <div className="min-h-screen px-4 text-center">
          <Transition.Child
            as={React.Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
          </Transition.Child>

          <span
            className="inline-block h-screen align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>

          <Transition.Child
            as={React.Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
              <Dialog.Title
                as="h3"
                className="text-lg font-medium leading-6 text-gray-900"
              >
                {holiday.name}
              </Dialog.Title>

              <div className="mt-4">
                <p className="text-gray-600">
                  Date: {dayjs(holiday.date.iso).format('MMMM D, YYYY')}
                </p>
                
                <div className="mt-2">
                  <p className="font-medium">Description:</p>
                  <p className="text-gray-600">{holiday.description}</p>
                </div>

                <div className="mt-2">
                  <p className="font-medium">Types:</p>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {holiday.type.map((type, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                      >
                        {type}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <button
                  type="button"
                  className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                  onClick={onClose}
                >
                  Close
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default HolidayDetailModal;