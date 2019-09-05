/* tslint:disable max-line-length */
import axios from 'axios';
import { format } from 'date-fns';

import * as config from '@/shared/config/config';
import { DATE_FORMAT, DATE_TIME_FORMAT } from '@/shared/date/filters';
import StdCodesService from '@/entities/std-codes/std-codes.service';
import { StdCodes } from '@/shared/model/std-codes.model';

const mockedAxios: any = axios;
jest.mock('axios', () => ({
  get: jest.fn(),
  post: jest.fn(),
  put: jest.fn(),
  delete: jest.fn()
}));

describe('Service Tests', () => {
  describe('StdCodes Service', () => {
    let service: StdCodesService;
    let elemDefault;
    let currentDate: Date;
    beforeEach(() => {
      service = new StdCodesService();
      currentDate = new Date();

      elemDefault = new StdCodes(
        0,
        'AAAAAAA',
        'AAAAAAA',
        currentDate,
        currentDate,
        'AAAAAAA',
        'AAAAAAA',
        0,
        currentDate,
        'AAAAAAA',
        false,
        0
      );
    });

    describe('Service methods', () => {
      it('should find an element', async () => {
        const returnedFromService = Object.assign(
          {
            startDate: format(currentDate, DATE_TIME_FORMAT),
            endDate: format(currentDate, DATE_TIME_FORMAT),
            codeValueDate: format(currentDate, DATE_FORMAT)
          },
          elemDefault
        );
        mockedAxios.get.mockReturnValue(Promise.resolve({ data: returnedFromService }));

        return service.find(123).then(res => {
          expect(res).toMatchObject(elemDefault);
        });
      });

      it('should create a StdCodes', async () => {
        const returnedFromService = Object.assign(
          {
            id: 0,
            startDate: format(currentDate, DATE_TIME_FORMAT),
            endDate: format(currentDate, DATE_TIME_FORMAT),
            codeValueDate: format(currentDate, DATE_FORMAT)
          },
          elemDefault
        );
        const expected = Object.assign(
          {
            startDate: currentDate,
            endDate: currentDate,
            codeValueDate: currentDate
          },
          returnedFromService
        );

        mockedAxios.post.mockReturnValue(Promise.resolve({ data: returnedFromService }));
        return service.create({}).then(res => {
          expect(res).toMatchObject(expected);
        });
      });

      it('should update a StdCodes', async () => {
        const returnedFromService = Object.assign(
          {
            groupCode: 'BBBBBB',
            internalCode: 'BBBBBB',
            startDate: format(currentDate, DATE_TIME_FORMAT),
            endDate: format(currentDate, DATE_TIME_FORMAT),
            parentInternalCode: 'BBBBBB',
            comments: 'BBBBBB',
            secLevel: 1,
            codeValueDate: format(currentDate, DATE_FORMAT),
            codeValueString: 'BBBBBB',
            codeValueBool: true,
            codeValueNumber: 1
          },
          elemDefault
        );

        const expected = Object.assign(
          {
            startDate: currentDate,
            endDate: currentDate,
            codeValueDate: currentDate
          },
          returnedFromService
        );
        mockedAxios.put.mockReturnValue(Promise.resolve({ data: returnedFromService }));

        return service.update(expected).then(res => {
          expect(res).toMatchObject(expected);
        });
      });

      it('should return a list of StdCodes', async () => {
        const returnedFromService = Object.assign(
          {
            groupCode: 'BBBBBB',
            internalCode: 'BBBBBB',
            startDate: format(currentDate, DATE_TIME_FORMAT),
            endDate: format(currentDate, DATE_TIME_FORMAT),
            parentInternalCode: 'BBBBBB',
            comments: 'BBBBBB',
            secLevel: 1,
            codeValueDate: format(currentDate, DATE_FORMAT),
            codeValueString: 'BBBBBB',
            codeValueBool: true,
            codeValueNumber: 1
          },
          elemDefault
        );
        const expected = Object.assign(
          {
            startDate: currentDate,
            endDate: currentDate,
            codeValueDate: currentDate
          },
          returnedFromService
        );
        mockedAxios.get.mockReturnValue(Promise.resolve([returnedFromService]));
        return service.retrieve({ sort: {}, page: 0, size: 10 }).then(res => {
          expect(res).toContainEqual(expected);
        });
      });

      it('should delete a StdCodes', async () => {
        mockedAxios.delete.mockReturnValue(Promise.resolve({ ok: true }));
        return service.delete(123).then(res => {
          expect(res.ok).toBeTruthy();
        });
      });
    });
  });
});
