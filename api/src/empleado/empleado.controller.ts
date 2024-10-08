import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { EmpleadoService } from './empleado.service';
import { EmpleadoDto } from './dto';
import { Empleado } from '@prisma/client';

@Controller('empleado')
export class EmpleadoController {
  constructor(private empleadoService: EmpleadoService) {}

  @Post('')
  @HttpCode(HttpStatus.CREATED)
  register(@Body() dto: EmpleadoDto): Promise<Empleado> {
    return this.empleadoService.create(dto);
  }

  @Get('')
  @HttpCode(HttpStatus.OK)
  findAll(): Promise<Empleado[]> {
    return this.empleadoService.findAll();
  }
}
