import { Controller, Post, Param, Body, Get, Query, All } from '@nestjs/common';
import { BlockService } from '@app/modules/block/block.service';
import { createBlockDto } from '@app/modules/block/block.dto';

@Controller('/api/v1/blocks')
export class BlockController {
  constructor(private service: BlockService) {}

  @Post()
  create(@Body() body: createBlockDto) {
    return this.service.save(body)
  }

  @Get(':id')
  block(@Query('id') id) {
    return this.service.findOneById(id)
  }

  @Get()
  all() {
    
  }
  
}
