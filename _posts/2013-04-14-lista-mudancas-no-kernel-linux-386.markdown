---
layout: post
title: Lista mudanças no Kernel Linux 3.8.6
date: '2013-04-14T09:14:00.000-07:00'
description: Lista mudanças no Kernel Linux 3.8.6
main-class: 'linux'
tags:
- Linux
- Artigos
image: http://4.bp.blogspot.com/-h3uTtuPtm4w/UWrU3cEEFFI/AAAAAAAABb4/PIxAy2yI994/s72-c/Tux_Worker.png
twitter_text: Lista mudanças no Kernel Linux 3.8.6
introduction: Lista mudanças no Kernel Linux 3.8.6
---
Com 124 mudanças o Kernel 3.8.6 foi disponibilizado. Destaca-se neste lançamento da série estável do Kernel Linux 3.8 correções na arquitetura ARM, nos drivers de redes Atheros (ath9k) e b43 (Broadcom), no sistema de arquivos Btrfs, no subsistema USB, no virtualizador Xen, além de correções no protocolo tcp e ipv6.
O Kernel 3.8.6 estará presente na próxima revisão estável da distribuição GNU/Linux juntaDados, junto com os patches BFQ e CK, a ser disponibilizada especialmente para o FLISOL-DF 2013.
Lista mudanças no Kernel Linux 3.8.6
{% highlight bash %}
8021q: fix a potential use-after-free
aoe: reserve enough headroom on skbs
ARM: cns3xxx: fix mapping of private memory region
ARM: imx: fix sync issue between imx_cpu_die and imx_cpu_kill
ARM: kirkwood: Fix chip-delay for GoFlex Net
ARM: OMAP: clocks: Delay clk inits atleast until slab is initialized
ath9k: avoid queueing hw check work when suspended
ath9k_hw: revert chainmask to user configuration after calibration
ath9k: limit tx path hang check to normal data queues
atl1e: drop pci-msi support because of packet corruption
b43: A fix for DMA transmission sequence errors
b43: N-PHY: increase initial value of "mind" in RSSI calibration
b43: N-PHY: use more bits for offset in RSSI calibration
Bluetooth: Add support for Dell[QCA 0cf3:0036]
Bluetooth: Add support for Dell[QCA 0cf3:817a]
Bluetooth: Fix not closing SCO sockets in the BT_CONNECT2 state
bonding: fix disabling of arp_interval and miimon
bonding: get netdev_rx_handler_unregister out of locks
bonding: remove already created master sysfs link on failure
Btrfs: don't drop path when printing out tree errors in scrub
Btrfs: fix locking on ROOT_REPLACE operations in tree mod log
Btrfs: fix race between mmap writes and compression
Btrfs: fix space leak when we fail to reserve metadata space
Btrfs: limit the global reserve to 512mb
Btrfs: use set_nlink if our i_nlink is 0
can: sja1000: fix define conflict on SH
DM9000B: driver initialization upgrade
drivers: net: ethernet: cpsw: use netif_wake_queue() while restarting tx queue
drivers: net: ethernet: davinci_emac: use netif_wake_queue() while restarting tx queue
drm/i915: Don't clobber crtc->fb when queue_flip fails
drm/i915: Use the fixed pixel clock for eDP in intel_dp_set_m_n()
efivars: explicitly calculate length of VariableName
efivars: Handle duplicate names from get_next_variable()
fec: Fix the build as module
HID: usbhid: fix build problem
HID: usbhid: quirk for MSI GX680R led panel
HID: usbhid: quirk for Realtek Multi-card reader
iommu/amd: Make sure dma_ops are set for hotplug devices
ipc: Restrict mounting the mqueue filesystem
ipv6: don't accept multicast traffic with scope 0
ipv6: don't accept node local multicast traffic from the wire
ipv6: fix bad free of addrconf_init_net
iwlwifi: dvm: don't send HCMD in restart flow
iwlwifi: fix length check in multi-TB HCMD
kernel/signal.c: use __ARCH_HAS_SA_RESTORER instead of SA_RESTORER
ks8851: Fix interpretation of rxlen field.
loop: prevent bdev freeing while device in use
mac80211: always synchronize_net() during station removal
mac80211: prevent spurious HT/VHT downgrade message
media: [REGRESSION] bt8xx: Fix too large height in cropcap
mwifiex: cancel cmd timer and free curr_cmd in shutdown process
mwifiex: fix race when queuing commands
mwifiex: skip pending commands after function shutdown
Nest rename_lock inside vfsmount_lock
net: add a synchronize_net() in netdev_rx_handler_unregister()
net: ethernet: cpsw: fix erroneous condition in error check
net: fix *_DIAG_MAX constants
net: fix the use of this_cpu_ptr
net: fq_codel: Fix off-by-one error
net/irda: add missing error path release_sock call
net: remove a WARN_ON() in net_enable_timestamp()
nfsd4: reject "negative" acl lengths
NFSv4.1: Always clear the NFS_INO_LAYOUTCOMMIT in layoutreturn
NFSv4.1: Fix a race in pNFS layoutcommit
NFSv4: Fix the string length returned by the idmapper
pch_gbe: fix ip_summed checksum reporting on rx
pid: Handle the exit of a multi-threaded init.
pnfs-block: removing DM device maybe cause oops when call dev_remove
regulator: Fix memory garbage dev_err printout.
Revert "crypto: caam - add IPsec ESN support"
Revert "crypto: talitos - add IPsec ESN support"
rtlwifi: usb: add missing freeing of skbuff
scm: Require CAP_SYS_ADMIN over the current pidns to spoof pids.
signal: Define __ARCH_HAS_SA_RESTORER so we know whether to clear sa_restorer
sky2: Receive Overflows not counted
sky2: Threshold for Pause Packet is set wrong
smsc75xx: fix jumbo frame support
staging: comedi: s626: fix continuous acquisition
SUNRPC: Add barriers to ensure read ordering in rpc_wake_up_task_queue_locked
sysfs: fix race between readdir and lseek
sysfs: handle failure path correctly for readdir()
target: Fix RESERVATION_CONFLICT status regression for iscsi-target special case
tcp: preserve ACK clocking in TSO
tcp: undo spurious timeout after SACK reneging
tg3: fix length overflow in VPD firmware parsing
thermal: shorten too long mcast group name
tile: expect new initramfs name from hypervisor file system
tracing: Prevent buffer overwrite disabled for latency tracers
tty: atmel_serial_probe(): index of atmel_ports[] fix
unix: fix a race condition in unix_release()
USB: ark3116: fix use-after-free in TIOCMIWAIT
USB: ch341: fix use-after-free in TIOCMIWAIT
USB: cypress_m8: fix use-after-free in TIOCMIWAIT
USB: EHCI: fix bug in iTD/siTD DMA pool allocation
USB: f81232: fix use-after-free in TIOCMIWAIT
usb: ftdi_sio: Add support for Mitsubishi FX-USB-AW/-BD
USB: ftdi_sio: fix use-after-free in TIOCMIWAIT
usb: gadget: udc-core: fix a regression during gadget driver unbinding
USB: io_edgeport: fix use-after-free in TIOCMIWAIT
USB: io_ti: fix use-after-free in TIOCMIWAIT
USB: mct_u232: fix use-after-free in TIOCMIWAIT
USB: mos7840: fix broken TIOCMIWAIT
USB: mos7840: fix use-after-free in TIOCMIWAIT
USB: oti6858: fix use-after-free in TIOCMIWAIT
USB: pl2303: fix use-after-free in TIOCMIWAIT
USB: quatech2: fix use-after-free in TIOCMIWAIT
USB: serial: add modem-status-change wait queue
USB: serial: fix hang when opening port
USB: spcp8x5: fix use-after-free in TIOCMIWAIT
USB: ssu100: fix use-after-free in TIOCMIWAIT
USB: ti_usb_3410_5052: fix use-after-free in TIOCMIWAIT
usb: xhci: Fix TRB transfer length macro used for Event TRB.
userns: Don't allow creation if the user is chrooted
userns: Restrict when proc and sysfs can be mounted
vfs: Add a mount flag to lock read only bind mounts
vfs: Carefully propogate mounts across user namespaces
virtio: console: add locking around c_ovq operations
virtio: console: rename cvq_lock to c_ivq_lock
vt: synchronize_rcu() under spinlock is not nice...
xen/blkback: correctly respond to unknown, non-native requests
xen-blkback: fix dispatch_rw_block_io() error path
xen-blkfront: switch from llist to list
xen/events: avoid race with raising an event in unmask_evtchn()
xen-pciback: notify hypervisor about devices intended to be assigned to guests
{% endhighlight %}
Fonte original: http://marcelo.juntadados.org/texts/kernel-linux-3-8-6
