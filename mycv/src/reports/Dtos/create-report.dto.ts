import {
  IsLatitude,
  IsLongitude,
  IsNumber,
  IsString,
  Max,
  Min,
  IsOptional,
} from 'class-validator';

const date = new Date();
const currentYear = date.getFullYear();

export class CreateReportDto {
  @IsNumber()
  @Min(0)
  @Max(10000000000)
  price: number;

  @IsOptional()
  approved: boolean;

  @IsString()
  make: string;

  @IsString()
  model: string;

  @IsNumber()
  @Min(1930)
  @Max(currentYear)
  year: string;

  @IsLongitude()
  lng: number;

  @IsLatitude()
  lat: number;

  @IsNumber()
  @Min(0)
  @Max(10000000)
  mileage: number;
}
