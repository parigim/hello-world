/*
DOCKER - KUBERNETES
Mohan Parigi
Visicle LLC
mohan@visicle.com
*/

// Docker concepts in pseudo-code

application a1, a2, a3, a4, a5;
image i1, i2, i3;

i1 = [a1, a5]; // create image from a1, a5
i2 = [a2];     // create image from a2

container c1, c2, c3, c4;
c1 = i1;       // create container c1 from i1
c2 = i2;
c3 = i3;

// Kubernetes concepts in pseudo-code

pod p1, p2;
p1 = [c1, c2];  // create pod p1 from c1, c2
p2 = [c3];

rc rc1, rc2; 
rc1 = [p1, p2]; // create replication controller for p1, p2

service s1;
s1 = [p1, p2];  // create service for p1, p2 

