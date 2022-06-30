---
date: 2022-6-20
tags:
 - Linux
categories:
 -  Linux
---



# linux挂载失败

[解决linux(ubuntu18)下无法挂载ntfs磁盘，并读写挂载硬盘](https://www.cnblogs.com/ilovepan/p/10055661.html)

首先需要有ntfs-3g，没有的话sudo apt-get install ntfs-3g

挂载硬盘：

chen@ilaptop:/$ `sudo mount -o rw,remount /dev/sdb1`

报错：

*Remounting is not supported at present. You have to umount volume and then mount it once again.*

*再挂载硬盘：*

chen@ilaptop:/$ sudo mount /dev/sdb1

又报错：

The disk contains an unclean file system (0, 0).

Metadata kept in Windows cache, refused to mount.

Falling back to read-only mount because the NTFS partition is in an

unsafe state. Please resume and shutdown Windows fully (no hibernation

修复！！！：

chen@ilaptop:/$ sudo ntfsfix /dev/sdb1

修复成功：

Mounting volume... The disk contains an unclean file system (0, 0).

Metadata kept in Windows cache, refused to mount.

FAILED

Attempting to correct errors...

Processing $MFT and $MFTMirr...

Reading $MFT... OK

Reading $MFTMirr... OK

Comparing $MFTMirr to $MFT... OK

Processing of $MFT and $MFTMirr completed successfully.

Setting required flags on partition... OK

Going to empty the journal ($LogFile)... OK

Checking the alternate boot sector... OK

NTFS volume version is 3.1.

NTFS partition /dev/sdb1 was processed successfully.

卸载硬盘：

chen@ilaptop:/$ sudo umount /dev/sdb1

读写挂载硬盘

chen@ilaptop:/$ sudo mount -o rw /dev/sdb1

 

来自 <https://www.cnblogs.com/ilovepan/p/10055661.html> 



# 挂载分区设置

sudo mount /dev/sda1

umount卸载