<script setup lang="ts">
import _ from "lodash";
import { ref, provide } from "vue";
import Button from "../base-components/Button";
import Lucide from "../base-components/Lucide";

</script>

<template>
  <div class="content">
    <h2 class=" text-lg font-bold intro-y" id="">
      ประวัติการอัปเกรดแพ็คเกจ
    </h2>
    <br /><br />
    <div class="overflow-x-auto">
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>ชื่อแพ็คเกจ</th>
            <th>ราคา / เดือน</th>
            <th>ระยะเวลา</th>
            <th>ราคารวม</th>
            <th>วันที่เปลี่ยนแพ็คเกจ</th>
            <th>วันที่ชำระเงิน</th>
            <th>สถานะ</th>
            <th>จัดการ</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>M</td>
            <td>2,499</td>
            <td>1 ปี</td>
            <td>29,988</td>
            <td>
              <div class="flex items-center justify-center">
                <span class="flex items-center justify-center w-5 h-5">
                  <Lucide icon="Calendar" class="w-4 h-4 mt-1" />
                </span>
                <span class="mr-3">08-03-2023</span>
                <span class="flex items-center justify-center w-5 h-5">
                  <Lucide icon="Clock" class="w-4 h-4 mt-1" />
                </span>
                <span>15:25:13</span>
              </div>
            </td>
            <td>         <div class="flex items-center justify-center">
                <span class="flex items-center justify-center w-5 h-5">
                  <Lucide icon="Calendar" class="w-4 h-4 mt-1" />
                </span>
                <span class="mr-3">08-03-2023</span>
                <span class="flex items-center justify-center w-5 h-5">
                  <Lucide icon="Clock" class="w-4 h-4 mt-1" />
                </span>
                <span>15:25:13</span>
              </div></td>
            <td><p class="status text-white">ชำระเงินแล้ว</p></td>
            <td>

                <Button as="a" variant="secondary" href="" class="inline-block mr-2 ">
                     <Lucide icon="Edit" class="w-4 h-4 " />
</Button>

<Button as="a" variant="secondary" href="" class="inline-block">
    <Lucide icon="Trash2" class="w-4 h-4" />
</Button>

            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<style>
.status{
    background-color: #af0000;
    border-radius: 10px;
}
</style>